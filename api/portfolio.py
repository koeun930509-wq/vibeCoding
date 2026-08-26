import json
import os
from http.server import BaseHTTPRequestHandler

from notion_client import Client


def _plain_text(rich_text):
    return "".join(part["plain_text"] for part in rich_text)


def _page_to_project(page):
    props = page["properties"]
    return {
        "title": _plain_text(props["저장소명"]["title"]),
        "description": _plain_text(props["설명"]["rich_text"]),
        "url": props["버셀 배포 URL"]["url"],
        "github": props["URL"]["url"],
        "techStack": [tag["name"] for tag in props["기술태그"]["multi_select"]],
    }


def get_portfolio_items():
    client = Client(auth=os.environ["NOTION_API_KEY"])
    data_source_id = os.environ["NOTION_DATA_SOURCE_ID"]

    response = client.data_sources.query(
        data_source_id=data_source_id,
        filter={"property": "포트폴리오 노출", "checkbox": {"equals": True}},
        sorts=[{"property": "마지막푸시일", "direction": "descending"}],
    )
    items = [_page_to_project(page) for page in response["results"]]
    items.sort(key=lambda item: item["title"] == "refrigeratorRecipe")
    return items


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            items = get_portfolio_items()
            body = json.dumps(items).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:
            body = json.dumps({"error": str(exc)}).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(body)
