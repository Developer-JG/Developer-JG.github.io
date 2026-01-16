import json
import os
from datetime import datetime
from scholarly import scholarly

AUTHOR_ID = "d2tmjtoAAAAJ"  # 반드시 문자열(따옴표)
OUTPUT_PATH = "public/data/scholar.json"


def fetch_stats():
    print(f"[scholar] Fetching stats for {AUTHOR_ID}...")

    author = scholarly.search_author_id(AUTHOR_ID)
    author = scholarly.fill(author, sections=["indices"])

    stats = {
        "citations": int(author.get("citedby", 0) or 0),
        "h_index": int(author.get("hindex", 0) or 0),
        "i10_index": int(author.get("i10index", 0) or 0),
        "last_updated": datetime.now().strftime("%Y-%m-%d"),
    }

    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(stats, f, ensure_ascii=False, indent=2)

    print(f"[scholar] Saved: {OUTPUT_PATH}")
    print(f"[scholar] Stats: {stats}")


if __name__ == "__main__":
    fetch_stats()
