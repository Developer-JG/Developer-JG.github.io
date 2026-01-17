import json
import os
import sys
import requests
from datetime import datetime

# 설정
AUTHOR_ID = "d2tmjtoAAAAJ"
API_KEY = os.environ.get("SERPAPI_KEY")
OUTPUT_DIR = "public/data"
OUTPUT_FILE = "scholar.json"
OUTPUT_PATH = os.path.join(OUTPUT_DIR, OUTPUT_FILE)

def fetch_stats():
    print("--- [Scholar Update Script Started] ---")
    
    # 1. API 키 확인
    if not API_KEY:
        print("[Error] SERPAPI_KEY is missing. Check GitHub Secrets.")
        sys.exit(1)

    print(f"[Info] Target Author ID: {AUTHOR_ID}")
    
    # 2. SerpApi 요청
    params = {
        "engine": "google_scholar_author",
        "author_id": AUTHOR_ID,
        "api_key": API_KEY
    }

    try:
        print("[Info] Requesting data from SerpApi...")
        response = requests.get("https://serpapi.com/search", params=params)
        response.raise_for_status()
        data = response.json()

        if "error" in data:
            print(f"[Error] SerpApi Error: {data['error']}")
            sys.exit(1)

        # 3. 데이터 파싱
        print("[Info] Parsing data...")
        author_info = data.get("author", {})
        cited_by = author_info.get("cited_by", {})
        table = cited_by.get("table", [])

        # 인덱스 에러 방지 처리
        citations = table[0].get("citations", {}).get("all", 0) if len(table) > 0 else 0
        h_index = table[1].get("h_index", {}).get("all", 0) if len(table) > 1 else 0
        i10_index = table[2].get("i10_index", {}).get("all", 0) if len(table) > 2 else 0

        stats = {
            "citations": citations,
            "h_index": h_index,
            "i10_index": i10_index,
            "last_updated": datetime.now().strftime("%Y-%m-%d"),
        }

        # 4. 파일 저장
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(stats, f, ensure_ascii=False, indent=2)

        print(f"[Success] Saved to {OUTPUT_PATH}")
        print(json.dumps(stats, indent=2))

    except Exception as e:
        print(f"[Critical Error] {e}")
        sys.exit(1)

if __name__ == "__main__":
    fetch_stats()