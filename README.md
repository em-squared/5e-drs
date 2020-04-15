[![H&D DRS Sources Loog](https://github.com/em-squared/heros-et-dragons-drs/blob/master/docs/.vuepress/public/dragon_binaire.png "H&D DRS Sources")](#)

# Héros & Dragons DRS
Ici se trouvent les sources du Document de Référence Système pour le jeu de rôle Héros & Dragons (H&D).

## Documentation
### Développement
Pour travailler sur le projet, vous devrez au préalable télécharger les sources :
```
git clone git@github.com:em-squared/heros-et-dragons-drs.git
```
Puis installer les dépendances :
```
cd heros-et-dragons-drs
yarn install
```
ou
```
cd heros-et-dragons-drs
npm install
```
Et lancer le service en local :
```
yarn dev
```
ou
```
npm run dev
```

### Production
Pour compiler le projet en vue d'un déploiement, vous devrez vous assurer qu'il ne contient pas de lien internes morts :
```
yarn check-md
```
ou
```
npm run-script check-md
```
Puis lancer la compilation :
```
yarn build
```
ou
```
npm run build
```
Vous pouvez ensuite tester le site statique compilé en lançant un serveur local :
```
cd docs/.vuepress/dist
python -m SimpleHTTPServer 8081
```
Le site statique sera accessible sur http://localhost:8081
