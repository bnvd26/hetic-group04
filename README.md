# HETIC GROUPE 04

Installation du projet back end
``cd server``
``composer install``
Recupèrer le fichier ``.env.example`` le dupliquer et le renommer : 
``.env`` ajouter ses identifiants de connexion locaux à la DB
  Enfin lancer les commandes :
  ``php artisan key:generate``
  ``php artisan migrate``
 
Puis lancer le serveur : ``php artisan serve``

