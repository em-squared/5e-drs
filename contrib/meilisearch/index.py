#!/usr/bin/env python3

from pathlib import Path
from io import StringIO

import yaml
from markdown import markdown
from meilisearch import Client


def pages():
    "return all pages"
    for readme in Path('.').glob('**/README.md'):
        if readme == Path("README.md"): # it's the home
            continue
        with open(readme, 'r') as file:
            head = StringIO()
            body = StringIO()
            state = None
            for line in file:
                if state is None and line == "---\n":
                    state = "head"
                    continue
                if state == "head":
                    if line == "---\n":
                        state = "body"
                        continue
                    head.write(line)
                else:
                    body.write(line)
            if head.tell() == 0: # empty
                continue
            head.seek(0)
            head = yaml.safe_load(head)
            body.seek(0)
            txt = markdown(body.read())
            yield str(readme), head['title'], txt


if __name__ == "__main__":
    client = Client('http://127.0.0.1:7700')
    try:
        idx = client.get_index('pages')
    except Exception:
        client.create_index('pages', dict(primaryKey='path'))
    print(idx)
    
    for path, title, body in pages():
        client.index('pages').add_documents([{
            'path': path,
            'title': title,
            'body': body,
        }])
        print(title)
