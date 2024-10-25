# Composants React

Le fichier `emoji.json` ci-joint contient un jeu de données sur les
emoji. Utilisez React afin de créer une page qui liste tous les emoji
que le jeu de données contient. Chaque emoji doit avoir sa propre 
« carte », laquelle doit contenir l'emoji en question, ainsi que son
*label* et ses *tags* (s'il y en a). Si un emoji a des `skins`,
celles-ci doivent être affichées en plus petit dans la carte.

Une barre de navigation verticale contenant tous les *labels* doit
également permettre de faire défiler la page vers la carte qui
correspond au *label* cliqué par l'utilisateur·rice.

En TypeScript, dans la définition d'un type d'objet, on ajoute un point
d'interrogation après une propriété afin d'indiquer que celle-ci est
facultative pour satisfaire l'interface.

```ts
type person = {
    name: string;         // obligatoire
    yearOfDeath?: number; // facultative
}
```

Rappelez-vous d'ailleurs qu'un objet satisfait l'interface d'un type en
autant qu'il possède les propriétés requises, même si l'objet en a
davantage.

```ts
const p = { name: "Bob", age: 12 }; // satisfait « person »
```
