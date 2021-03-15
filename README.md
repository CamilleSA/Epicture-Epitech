# B-DEV-501-PAR-5-1-epicture-camille.sayous

# 0- Application

L'objectif de ce projet est d'utiliser et de mettre en œuvre des plates-formes API de partage de photos en ligne. Le but est de créer un chercheur de photos et une application de navigation sur la plate-forme suivante: **Imgur**.

# 1- Se connecter

* Pour vous connecter, lancez l'application

* Sur cette page, votre identifiant et votre mot de passe vont vous être demandés.

* Pour valider cliquer sur "**allow**".

![Imgur](https://i.imgur.com/lCZNBdp.png)

# 2- Page d'accueil

* Maintenant que vous êtes connecté, vous entrez dans l'application mobile (multi-plateforme web) "**EpictureVC**. Nous allons vous décrire   toutes les fonctionnalités de l'application les unes après les autres.

* Dès votre connexion, vous trouverez trois boutons: "**New Post**, "**Favorites**", "**Browser**" que nous évorquerons par la suite. Au-dessus de ces boutons se trouve votre nom de compte ainsi que votre avatar puis un bouton "**Imgur**" qui vous permettra de revenir à l'accueil, sur cet exemple "**EpictureVC**:

![Imgur](https://i.imgur.com/FdPXidh.png)

* En cliquant sur votre avatar, une boîte de dialogue s'ouvre, comprenant plusieurs possibilités :

![Imgur](https://i.imgur.com/KjVIj3j.png)

* "**Posts**": Vous permet d'afficher vos posts.

* "**Favorites**": Vous permet d'afficher vos favoris.

* "**Comments**: Vous permet d'afficher vos commentaires.

* "**Images**": Vous permet d'afficher vos images.

* "**Albums**": Vous permet d'afficher vos albums.

* "**Settings**": Vous permet d'afficher vos paramètres de compte.

* "**Sign Out**": Vous permet de vous déconnecter de l'application.



# 3- Fil d'actualités

* Sur la page d'accueil, s'affiche un fil d'actualité

* Vous pouvez filtrer votre fil d'actualité avec les fonctionnalités suivantes :

![Imgur](https://i.imgur.com/y7hjlqA.png)
![Imgur](https://i.imgur.com/HVLqEaQ.png)

* En cliquant sur une image, s'affiche plusieurs détails:
  * Le titre de l'image
  * L'utilisateur de cette image
  * Le nombre de vues

![Imgur](https://i.imgur.com/KrUnHls.png)

  * Miniature des images suivantes

!![Imgur](https://i.imgur.com/3OG6YXZ.png)


  * Possibilité de commenter l'image
  * Le nombre de commentaires
  * Les commentaires et leur utilisateur
  * La plateforme de l'utilisateur (Iphone / Android / Pc)
  * Le nombre de points des utilisateurs

![Imgur](https://i.imgur.com/mfNfcfs.png)


# 4- Boutons

* "**Browser**": Vous permet de rechercher une image à partir de nimporte quel mot clés.

![Imgur](https://i.imgur.com/cVjVAuU.png)

* "**New Post**": Vous permet de poster une image depuis votre compte sur la plateforme **Imgur**.

* "**Favorites**: Vous permet d'afficher vos favoris.

# 5- Outils de développement

## ReactJS / Npm / Expo

* **L'authentification** est faite avec **0Auth2** et **l'API Imgur**
* **L'appel de l'API** est réalisé avec le module **Axios**
* **Le design** est réalisé en css

## Tests de l'application

* **Visual Studio Code** => Editeur de texte
* **Web** => **localhost**
* **Android** => **AndroidStudio** => gestionnaire d'appareils virtuels **Android**
* **IOS** => **Expo** => permet de tester l'application sur n'importe quel appareil en temps réel


# 6- Lancement de l'application en web

## 1- Installation des dépendances npm :

> npm install

## 2- Lancement en localhost :

> npm start

# 7- Lancement de l'application en mobile

## 1- Création du build

> npm run-script build

## 2- Lancez le build sur votre AndroidStudio afin de lancer l'application via un émulateur

# UML

![ScreenUML](https://github.com/EpitechIT2020/B-DEV-501-PAR-5-1-epicture-camille.sayous/blob/master/screen/uml.png)







