# HETIC GROUPE 04

## Project setup

### Backend

```
cd server
composer install
```
Recupèrer le fichier ``.env.example`` le dupliquer et le renommer : ``.env`` ajouter ses identifiants de connexion locaux à la DB

```
php artisan key:generate
php artisan migrate
php artisan serve
```

### Frontend

```
cd client
yarn
yarn start
```