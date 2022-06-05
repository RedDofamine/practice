<?php

namespace core;

class Router
{
   private $controller = 'Main';
   private $action = 'index';

   private $routes = explode('/', $_SERVER['REQUEST_URI']);

   
};



spl_autoload_register(function ($class_name) {
   include $class_name . '.php';
});
