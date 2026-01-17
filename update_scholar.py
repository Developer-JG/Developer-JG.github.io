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
    print("--- [DIAGNOSTIC MODE STARTED] ---")
    
    if not API_KEY:
        print("[Error] SERPAPI_KEY is missing.")
        sys.exit(1)

    print(f"[Info] Target Author ID: {AUTHOR_ID}")
    
    params = {
        "engine": "google_scholar_author",
        "author_id": AUTHOR_ID,
        "api_key": API_KEY,
        "hl": "en",
        "num": 100
    }

    try:
        print("[Info] Requesting data from SerpApi...")
        response = requests.get("https://serpapi.com/search", params=params)
        response.raise_for_status()
        data = response.json()

        if "error" in data:
            print(f"[Error] SerpApi Error: {data['error']}")
            sys.exit(1)

        # 1. 요약표 확인
        cited_by = data.get("author", {}).get("cited_by", {})
        table = cited_by.get("table", [])
        print(f"\n[Check 1] Summary Table Exists? {'YES' if table else 'NO'}")
        
        # 2. 논문 목록 확인
        articles = data.get("articles", [])
        print(f"[Check 2] Number of Articles Found: {len(articles)}")

        # 3. (중요) 첫 번째 논문의 데이터 구조 뜯어보기
        if articles:
            print("\n" + "="*20 + " [FIRST ARTICLE RAW DATA] " + "="*20)
            # 첫 번째 논문의 모든 정보를 로그에 출력합니다.
            print(json.dumps(articles[0], indent=2, ensure_ascii=False))
            print("="*60 + "\n")
        else:
            print("[Warning] No articles found! Check if the profile is public.")

        # --- 임시 저장 (웹사이트 갱신 확인용 가짜 데이터) ---
        # 진단 중에도 웹사이트가 변하는지 보기 위해 강제로 숫자를 넣습니다.
        stats = {
            "citations": 9999,      # 로그 확인 후 진짜 코드로 바꿀 예정
            "h_index": 99,
            "i10_index": 99,
            "last_updated": datetime.now().strftime("%Y-%m-%d"),
        }
        
        os.makedirs(OUTPUT_DIR, exist_ok=True)
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(stats, f, ensure_ascii=False, indent=2)
            
        print("[Info] Saved DUMMY data (9999) for testing.")

    except Exception as e:
        print(f"[Critical Error] {e}")
        sys.exit(1)

if __name__ == "__main__":
    fetch_stats()