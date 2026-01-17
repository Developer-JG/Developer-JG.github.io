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
    
    if not API_KEY:
        print("[Error] SERPAPI_KEY is missing. Check GitHub Secrets.")
        sys.exit(1)

    print(f"[Info] Target Author ID: {AUTHOR_ID}")
    
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

        # --- [디버깅 시작] 원본 데이터 구조 확인 ---
        print("\n" + "="*30)
        print("[Debug] cited_by data structure:")
        author_info = data.get("author", {})
        cited_by = author_info.get("cited_by", {})
        print(json.dumps(cited_by, indent=2, ensure_ascii=False))
        print("="*30 + "\n")
        # -------------------------------------

        # 기존 파싱 로직 (테이블 기반)
        table = cited_by.get("table", [])
        
        # 테이블이 비었을 경우를 대비한 방어 코드
        if not table:
            print("[Warning] 'table' list is empty! Trying to find stats elsewhere...")
            # 만약 table이 비어있다면, 일단 0으로 두되 로그를 통해 원인을 파악합니다.
            citations = 0
            h_index = 0
            i10_index = 0
        else:
            citations = table[0].get("citations", {}).get("all", 0) if len(table) > 0 else 0
            h_index = table[1].get("h_index", {}).get("all", 0) if len(table) > 1 else 0
            i10_index = table[2].get("i10_index", {}).get("all", 0) if len(table) > 2 else 0

        stats = {
            "citations": citations,
            "h_index": h_index,
            "i10_index": i10_index,
            "last_updated": datetime.now().strftime("%Y-%m-%d"),
        }

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