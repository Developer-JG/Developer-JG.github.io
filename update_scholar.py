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
        author_info = data.get("author", {})
        cited_by_table = author_info.get("cited_by", {}).get("table", [])
        
        citations = 0
        h_index = 0
        i10_index = 0

        if cited_by_table:
            print("[Info] Found summary table. Using Google's calculation.")
            citations = cited_by_table[0].get("citations", {}).get("all", 0)
            h_index = cited_by_table[1].get("h_index", {}).get("all", 0)
            i10_index = cited_by_table[2].get("i10_index", {}).get("all", 0)
        else:
            print("[Info] No summary table found. Calculating manually from articles...")
            
            # --- [ 핵심 로직: 논문 목록에서 직접 계산 ] ---
            articles = data.get("articles", [])
            citations_list = []
            
            for art in articles:
                cited_data = art.get("cited_by", {})
                val = cited_data.get("value") # 일단 값을 가져옴
                
                # [수정된 부분] 값이 None(Null)이면 0으로 강제 변환
                if val is None:
                    val = 0
                    
                citations_list.append(int(val))
            
            print(f"[Debug] Citations per article: {citations_list}")

            # 계산 로직
            citations = sum(citations_list)
            citations_list.sort(reverse=True)
            
            h_index = 0
            for i, c in enumerate(citations_list):
                if c >= i + 1:
                    h_index = i + 1
                else:
                    break
            
            i10_index = sum(1 for c in citations_list if c >= 10)

        # 결과 저장
        stats = {
            "citations": citations,
            "h_index": h_index,
            "i10_index": i10_index,
            "last_updated": datetime.now().strftime("%Y-%m-%d"),
        }

        os.makedirs(OUTPUT_DIR, exist_ok=True)
        with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
            json.dump(stats, f, ensure_ascii=False, indent=2)

        print(f"[Success] Stats Calculated: Citations={citations}, h-index={h_index}, i10={i10_index}")
        print(f"[Success] Saved to {OUTPUT_PATH}")

    except Exception as e:
        print(f"[Critical Error] {e}")
        sys.exit(1)

if __name__ == "__main__":
    fetch_stats()