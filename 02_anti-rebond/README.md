# Devoir 2 : Anti-rebond

Concevez une fonction nommée `debounce` qui, étant donné un délai en
millisecondes ainsi qu'une fonction de rappel variadique générique,
retourne une fermeture qui, une fois appelée, appelle la fonction de
rappel après que le délai soit écoulé. Si la fermeture retournée par
`debounce` est appelée de nouveau avant la fin du délai, le délai est
réinitialisé.

Vous pouvez utiliser le code ci-dessous pour tester votre solution.

```html
<label>
    Recherche
    <input type="search" name="search">
</label>
```

```ts
const input = document.querySelector("input") as HTMLInputElement;
const logValue = debounce(1000, (value) => console.log(value));
input.addEventListener("input", () => logValue(input.value));
```

Après avoir écrit dans le champs « search », sa valeur devrait être
affichée une seule fois dans la console après un délai de 1 seconde.

Utilisez les alias de type afin de préciser que le délai est en
millisecondes, et pour ne pas répéter la signature de la fonction
variadique générique.

Vous aurez besoin des fonctions natives `setTimeout` et `clearTimeout`.
