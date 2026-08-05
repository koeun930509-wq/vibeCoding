import os

from notion_client import Client

client = Client(auth=os.environ["NOTION_API_KEY"])
DATA_SOURCE_ID = os.environ["NOTION_DATA_SOURCE_ID"]


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
    response = client.data_sources.query(
        data_source_id=DATA_SOURCE_ID,
        filter={"property": "포트폴리오 노출", "checkbox": {"equals": True}},
        sorts=[{"property": "마지막푸시일", "direction": "descending"}],
    )
    items = [_page_to_project(page) for page in response["results"]]
    items.sort(key=lambda item: item["title"] == "refrigeratorRecipe")
    return items
