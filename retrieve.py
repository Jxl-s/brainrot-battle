import os
import json
import re
import requests
from bs4 import BeautifulSoup
from urllib.parse import quote

wiki_dict = {
    "Brr brr Patapim": "/wiki/Brr_brr_Patapim",
    "Lirilì Larilà": "/wiki/Liril%C3%AC_Laril%C3%A0",
    "Frigo Camelo": "/wiki/Frigo_Camelo",
    "Ballerina Cappuccina": "/wiki/Ballerina_Cappuccina",
    "Bearorito Applepitolirotito": "/wiki/Bearorito_Applepitolirotito",
    "Bombardili Gorilili": "/wiki/Bombardili_Gorilili",
    "Boneca Ambalabu": "/wiki/Boneca_Ambalabu",
    "Burbaloni Luliloli": "/wiki/Burbaloni_Luliloli",
    "Cappuccino Assassino": "/wiki/Capuchino_Assassino",
    "Chimpanzini Bananini": "/wiki/Chimpanzini_Bananini",
    "Crocodilo Potatino": "/wiki/Crocodilo_Potatino",
    "Ecco Cavallo Virtuoso": "/wiki/Ecco_Cavallo_Virtuoso",
    "Emo Struzzo Paparazzi": "/wiki/Emo_Struzzo_Paparazzi",
    "Glorbo Fruttodrillo": "/wiki/Glorbo_Fruttodrillo",
    "Orangutini Ananasini": "/wiki/Orangutini_Ananasini",
    "Piccione Macchina": "/wiki/Piccione_Macchina",
    "Quesadilla Crocodila": "/wiki/Quesadilla_Crocodila",
    "Tric Trac baraboom": "/wiki/Tric_Trac_baraboom",
    "Trippi Troppi": "/wiki/Trippi_Troppi",
    "Bombardiro Crocodillo": "/wiki/Bombardiro_Crocodillo",
    "Tralalero Tralala": "/wiki/Tralalelo_Tralala",
    "Tung Tung Tung Sahur": "/wiki/Tung_Tung_Tung_Tung_Tung_Tung_Tung_Tung_Tung_Sahur",
}

def fetch_and_save_image(name, url):
    try:
        response = requests.get(f"https://brainrot.fandom.com{url}")
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching {name}: {e}")
        return None

    soup = BeautifulSoup(response.text, 'html.parser')
    image_tag = soup.select_one('.pi-image-thumbnail')

    if image_tag is None:
        print(f"No image found for {name}")
        return None

    image_url = image_tag['src']
    try:
        response = requests.get(image_url)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error downloading image for {name}: {e}")
        return None

    filename = re.sub(r'[^a-zA-Z0-9\- ]', '', name.lower().replace(' ', '-'))
    filepath = f"brainrot/{filename}.webp"

    os.makedirs('brainrot', exist_ok=True)
    with open(filepath, 'wb') as f:
        f.write(response.content)

    return filepath

def main():
    brainrot_data = []
    for name, url in wiki_dict.items():
        if url is None:
            print(f"Skipping {name} (no URL)")
            continue

        image_path = fetch_and_save_image(name, url)
        if image_path is None:
            continue

        brainrot_data.append({
            'id': re.sub(r'[^a-zA-Z0-9\- ]', '', name.lower().replace(' ', '-')),
            'name': name,
            'imageUrl': image_path,
            'description': f'Description of {name}'
        })

    with open('brainrot_data.json', 'w') as f:
        json.dump(brainrot_data, f, indent=4)

if __name__ == "__main__":
    main()