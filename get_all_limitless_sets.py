import urllib.request
import re
import json

url = 'https://onepiece.limitlesstcg.com/cards'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
st_slugs = re.findall(r'href="/cards/([^"]+)"', html)
print('All set slugs:\n', [s for s in set(st_slugs) if '/' not in s])
