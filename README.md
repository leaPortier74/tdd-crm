# tdd-crm

## Installation :

### Prérequis

- Avoir npm sur votre machine

### Installation 
```
# cloner le repo : 
git clone https://github.com/leaPortier74/tdd-crm.git

# installer les dépendances : 
npm install

# Lancer le projet 
npm run serve
```

## Réponse aux questions : 

Il y a également un petit document "justification.txt" dans le dossier Document.

### Explication test de charge :

Nous avons commencer par faire un test basic pour savoir si cela fonctionnait.
Ensuite nous avons testé en augmentant le nombre d'utilisateurs.

### Explication choix techno

Nous avons choisi d'utiliser Vue.js car nous avions déjà fait des projets avec cette techno, on est alaise avec.
Nous avons choisi Locust car nous avions vue celui là en premier en cours et il était plus parlant pour nous que Jmeter.
Nous avons choisi Cypress car Alexis travail avec à son travail, donc c'était plus facile pour nous de l'utiliser.

### Pour lancer Cypress 

```
npx cypress open
```

### Les fichiers 

- locustfile.py : Locust
- api.spec.mjs : dans le dossier tests pour le test de charge
