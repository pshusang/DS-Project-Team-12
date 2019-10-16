<?php

class DbConnection
{
  protected static $connection;

  // function __create() {
  //
  // }

    static function getConnection() {
      if (self::$connection) {
        return self::$connection;
      }

      try {
          $dsn = 'mysql:host='.getenv('team12ds.cs5bo2vvf8tr.us-east-1.rds.amazonaws.com').';dbname='.getenv('team12ds').';charset=utf8');
          error_log($dsn);
          self::$connection = new PDO(
             $dsn,
             getenv('team12'),
             getenv('muesli12'),
             [
                 PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                 PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                 PDO::ATTR_EMULATE_PREPARES   => false
             ]
           );
      } catch (\PDOException $e) {
          throw new \PDOException($e->getMessage(), (int)$e->getCode());
      }
      return self::$connection;
    }
}
