# HETIC GROUPE 04

Installation du projet back end
``cd server``
``composer install``
 Installer vagrant https://www.vagrantup.com/downloads
 ```php vendor/bin/homestead make```
Monter une machine virtuelle 
 ``vagrant up``
 Acceder a cette machine  virtuelle 
 ``` vagrant ssh```
  ensuite
  ```mysql``` puis ``DATABASE CREATE hetic;``
  enfin quitter le CLI mySql puis une fois de nouveau sur la machine virtuelle :
  ````php artisan migrate``` (BDD)
 


