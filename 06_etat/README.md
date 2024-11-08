# Devoir 7 : État

Pour ce devoir, on vous demande de créer un gestionnaire de tâches étape
par étape.

## Étape 1

Créez un composant `Task` ayant comme *prop* le nom de la tâche à faire.
Le composant doit afficher le nom de la tâche. Il doit aussi avoir un
contrôle qui, lorsque coché, raye le nom de la tâche.

Veuillez tester votre composant en l'affichant sur la page avant de passer
à la prochaine étape.

## Étape 2

Créez un composant `TaskList` ayant un formulaire qui permet d'entrer le
nom d'une tâche. Les tâches doivent avoir un identifiant numérique, et
elles doivent être stockées dans un tableau. Utilisez un compteur pour
l'identifiant. 

Pour tester le formulaire, affichez le nombre total des tâches
présentement dans le tableau. Assurez-vous que le compteur se mette à
jour au fur et à mesure que des tâches sont entrées. 

Enfin, affichez les tâches avec le composant conçu à l'étape 1. La
dernière tâche devrait s'afficher en premier. Attention, n'oubliez pas
les clés sur les éléments d'une liste !

## Étape 3

Dans le composant `Task`, ajoutez un bouton qui, lorsque cliqué, fait
apparaître un contrôle pour changer le nom de la tâche. Le contrôle doit
apparaître dans le composant `Task`. Le gestionnaire d'évènement sera
toutefois défini dans le composant parent `TaskList` puisque c'est le
tableau de tâches qui devra être mis à jour.
