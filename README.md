[![5E DRS Sources Logo](https://github.com/em-squared/5e-drs/blob/master/docs/.vuepress/public/logo.png "5E DRS Sources")](#)

# 5E DRS
Ici se trouvent les sources du Document de Référence Système pour jeux de rôle en OGL 5E.

## Documentation
### Publication
Seuls les contenus soumis à la licence OGL sont publiés. Si des contenus sont manquants, demandez-vous en premier lieu s'ils sont sous licence OGL ou pas.
Exemples :
* Les textes de description et d'ambiance ne sont pas OGL

### Correction de contenu
Si vous relevez des erreurs, il suffit d'éditer le fichier source directement sur Github. Un fork sera automatiquement généré, et vous pourrez effectuer une pull request une fois votre correction commitée. La pull request sera acceptée si elle est valide.
Si vous ne souhaitez pas (ou ne pouvez pas) corriger une erreur vous-même, vous pouvez [créer une issue](https://github.com/em-squared/5e-drs/issues/new) avec le label `documentation`. Soyez le plus précis possible en incluant des liens vers les contenus erronés et les sources des corrections. L'erreur sera corrigée si elle est avérée.

### Développement
Pour travailler sur le projet, vous devrez au préalable télécharger les sources :
```
git clone git@github.com:em-squared/5e-drs.git
```
Puis installer les dépendances :
```
cd 5e-drs
yarn install
```
ou
```
cd 5e-drs
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
Au vu de la quantité de fichiers à traiter, le build est gourmand en mémoire et en ressource processeur. Sur une configuration moyenne, le build prend un peu moins de 2 minutes, mais peut monter à 5 minutes sur des configurations plus modestes. La consommation mémoire peut monter jusqu'à 5Go. Il faudra donc impérativement augmenter la plage mémoire allouable à Node lors du build :
```
export NODE_OPTIONS=--max-old-space-size=8192
```
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

## Soutien
Si le cœur vous en dit, vous pouvez soutenir le projet sur [Ko-fi](https://fr.tipeee.com/em-squared/). Ça sera grandement apprécié. Le site est entièrement gratuit et ne souffre d'aucune publicité. Aucun revenu n'est donc généré par son biais.

## Licence
Le code source applicatif (hors contenus donc) est sous [licence GPLv3](https://github.com/em-squared/5e-drs/blob/master/LICENSE). Vous êtes donc libres de le copier, le modifier et le redistribuer à condition d'en conserver la licence d'origine.
