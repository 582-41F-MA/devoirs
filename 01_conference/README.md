# Devoir 1 : Conférence

Le but de ce premier devoir est d'apprivoiser les annotations de types
tout en révisant divers concepts introduits précédemment : programmation
orientée objet, manipulation de documents HTML, séparation des
responsabilités, etc.

## Consignes

Le document HTML ci-joint contient un formulaire qui permet
d'enregistrer de nouvelles présentations pour une conférence qui aura
lieu sous peu. Écrivez la logique nécessaire à ce que, lorsqu'une
présentation est ajoutée par un ou une utilisatrice, celle-ci soit
insérée dans le tableau. 

Le nombre de place pour une présentation est déterminé par la grandeur
de la salle. La petite salle a 100 places. La moyenne salle a 200
places. La grande salle a 300 places. On doit pouvoir cliquer sur un
bouton afin d'acheter un billet (gratuit) pour une présentation. À
chaque fois qu'un billet est acheté, le nombre de places restantes doit
être mis à jour.

Portez une attention particulière au découplage entre la logique métier
(créer une présentation, déterminer le nombre de places, acheter un
billet, etc.) et la manipulation du DOM. L'implémentation de la classe
qui représente les présentations ne devrait pas dépendre de la structure
du document HTML.
