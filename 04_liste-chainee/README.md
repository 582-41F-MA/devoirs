# Devoir 4 : Liste chaînée

Une liste chaînée est une structure de données faite de paires dont le
premier élément est une donnée et le second une référence à une autre
paire. Dans certains langages de programmations fonctionnels, dont
Scheme (une des influences majeures de JavaScript), la liste chaînée est
le moyen principal de représenter un ensemble d'éléments.

Considérons par exemple une liste contenant trois paires (représentées
ci-dessous par des crochets `[ | ]`), chacune ayant comme valeurs un
nombre et une référence (`•→`) vers une autre paire. Une liste chaînée
se termine habituellement par une liste vide (`[]`) ou `null`.

```
[1|•]→ [2|•]→ [3|•]→ []
```

Un des avantages de la liste chaînée par rapport au tableau est que
plusieurs listes peuvent partager une partie de leur structure. Cette
caractéristique rend la liste chaînée une structure de données
persistante idéale car elle est peut couteuse à copier.

Imaginons deux listes dont seul le premier élément diffère. Plutôt que
d'avoir deux copies complètes, les premières paires peuvent faire
référence au même « reste » de la liste.

```
[1|•]→ 
       [2|•]→ [3|•]→ []
[0|•]→
```

## Consignes

1.  Définissez un type d'objet qui représente une paire dans une liste
    chaînée. On appelle généralement le premier élément « *head* » et le
    second « *tail* ». Le premier élément peut être de n'importe quel
    type, tandis que le second doit être soit `null` soit une référence
    vers une autre paire (rappelez-vous qu'un objet est toujours affecté
    par référence).

2.  La fonction pour créer une paire s'appelle `cons`. Implémentez une
    version JavaScript de `cons` qui, étant donnée une valeur générique
    et soit une autre pair soit `null`, retourne une nouvelle paire. La
    paire doit être immuable. Le mot-clé `readonly`, lorsque ajouté
    avant le nom d'une propriété, rend celle-ci immuable.

3.  Concevez des fonctions nommées `first` et `rest` qui, étant donnée
    une paire, retournent respectivement le premier et le second élément
    de la paire.

4.  Concevez une fonction `list` qui, étant donnée un nombre indéterminé
    d'arguments génériques, retourne une liste de paires. Autrement dit,
    la fonction doit retourner la première paire de la liste (car
    celle-ci pointe vers la paire suivante, et ainsi de suite). Indice :
    on construit généralement une liste en commençant par la fin.

5.  Concevez une fonction `length` qui, étant donnée une liste, retourne
    le nombre d'éléments que contient celle-ci.

6.  Concevez une fonction `ith` qui, étant données une liste et une
    position retourne l'élément à la position donnée.
