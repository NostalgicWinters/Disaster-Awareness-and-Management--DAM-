import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

def search_wikipedia(keyword):
    search_url = f"https://en.wikipedia.org/w/index.php?fulltext=1&search={quote(keyword)}&title=Special%3ASearch&ns0=1"
    headers = {"User-Agent": "Mozilla/5.0"}  # Set a User-Agent to avoid blocking
    
    response = requests.get(search_url, headers=headers)
    
    if response.status_code != 200:
        print("Failed to retrieve search results")
        return []

    soup = BeautifulSoup(response.text, "html.parser")

    # Check if search results exist
    search_results = soup.select(".mw-search-result-heading a")

    if search_results:
        # Extract titles and URLs for the first 10 results
        results = [
            {"title": link.text, "url": "https://en.wikipedia.org" + link["href"]}
            for link in search_results[:10]
        ]
        return results
    
    # If no search results, it might be a direct page redirect
    title_element = soup.find("h1", class_="firstHeading")
    if title_element:
        return [{"title": title_element.text, "url": search_url}]

    return []  # No results found

if __name__ == "__main__":
    keyword = input("Enter the keyword to search in Wikipedia: ")
    results = search_wikipedia(keyword)
    
    if results:
        print("\nTop Wikipedia Search Results:")
        for idx, result in enumerate(results, start=1):
            print(f"{idx}. {result['title']}")
            print(f"   Link: {result['url']}\n")
    else:
        print("No results found.")
