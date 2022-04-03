# Meilisearch

Indexation naïve et systématique du contenu.

Fonctionne avec un [meilisearch](https://www.meilisearch.com/) local, ou dans un conteneur, tant que ça écoute http://localhost:7700

## Demo

Lance meilisearch dans un conteneur

    make up

Index le site (avec du code en python)

    make index

Mailisearch propose une UI web pour tester la recherche : [http://localhost:7700](http://localhost:7700)

Il est possible de copier l'index, le dossier `data.ms` sur un serveur, pour effectuer des recherches (en lecture seule).
