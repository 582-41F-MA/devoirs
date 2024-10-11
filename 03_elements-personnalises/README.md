# Devoir 3 : Élément personnalisé

Pour ce devoir, on vous demande de créer un [élément personnalisé][MDN] qui
permet d'envoyer une requête HTTP afin de valider un champs `input`.

[MDN]:
https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements

```html
<field-validator href="/api/validate/password" delay="2000" show-valid>
    <input type="text" name="password">
</field-validator>
```

L'élément doit observer trois attributs : 

-   l'attribut `href` pour spécifier l'adresse URL où envoyer la
    requête ; 
-   l'attribut `show-valid` pour déterminer si un message de succès
    s'affiche où non ; et
-   l'attribut `delay` pour définir un délai anti-rebond. 

Les deux derniers attributs sont facultatifs. Par défaut, leur valeur
respective sont `false` et `1000`.

La valeur du champs `input` doit être automatiquement validée après un
délai anti-rebond (voir devoir 2). La validation se fait côté serveur.
Si celui-ci répond à la requête de validation par une réponse dont le
status est 200 (*OK*), alors la valeur est valide. Si le statut de la
réponse est `422` (*Unprocessable Entity*), alors la valeur est
invalide. Si le corps de la réponse contient un message d'erreur qui
explique pourquoi la valeur est invalide, alors celui-ci devrait être
affiché à l'utilisateur·ice. Sinon, veuillez afficher un message
d'erreur générique.

Utilisez le serveur qui se trouve dans le fichier `server.go` pour
tester votre élément. Pour démarrer le serveur, exécutez la commande `go
run server.go` dans votre terminal (vous devrez télécharger Go :
`scoop/brew install go`). Le serveur valide les mots de passe
(`password`) encodés en format URL inclus dans les requêtes POST dont le
chemin est `/api/validate/password`. Il valide aussi les courriels
(`email`) encodés en format URL inclus dans les requêtes POST dont le
chemin est `/api/validate/email`.

```
curl localhost:4000/api/validate/password -i -d "password=abc123"

HTTP/1.1 422 Unprocessable Entity
Date: Fri, 11 Oct 2024 11:26:57 GMT
Content-Length: 45
Content-Type: text/plain; charset=utf-8

This field must contain at least 8 characters
```

Le serveur peut aussi faire office de serveur de fichiers. Il répondra à
toute requête dont le chemin correspond à un fichier dans le répertoire
par le contenu du fichier. Par exemple, la requête suivante retournera
le contenu du fichier `server.go` :

```
curl localhost:4000/server.go
```
