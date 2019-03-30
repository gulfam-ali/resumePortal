<?php

return [

   'default' => 'testbed',

   'connections' => [
        'local' => [
            'driver'    => env('DB_CONNECTION_LC'),
            'host'      => env('DB_HOST_LC'),
            'port'      => env('DB_PORT_LC'),
            'database'  => env('DB_DATABASE_LC'),
            'username'  => env('DB_USERNAME_LC'),
            'password'  => env('DB_PASSWORD_LC'),
            'charset'   => 'utf8',
            'collation' => 'utf8_general_ci',
            'prefix'    => 're_',
            'strict'    => false,
            'engine'    => 'InnoDB'
        ],

        'testbed' => [
            'driver'    => env('DB_CONNECTION_TB'),
            'host'      => env('DB_HOST_TB'),
            'port'      => env('DB_PORT_TB'),
            'database'  => env('DB_DATABASE_TB'),
            'username'  => env('DB_USERNAME_TB'),
            'password'  => env('DB_PASSWORD_TB'),
            'charset'   => 'utf8',
            'collation' => 'utf8_general_ci',
            'prefix'    => 're_',
            'strict'    => false,
            'engine'    => 'InnoDB'
        ],

        'production' => [
            'driver'    => env('DB_CONNECTION_PRD'),
            'host'      => env('DB_HOST_PRD'),
            'port'      => env('DB_PORT_PRD'),
            'database'  => env('DB_DATABASE_PRD'),
            'username'  => env('DB_USERNAME_PRD'),
            'password'  => env('DB_PASSWORD_PRD'),
            'charset'   => 'utf8',
            'collation' => 'utf8_general_ci',
            'prefix'    => 're_',
            'strict'    => false,
            'engine' => 'InnoDB'
        ]
    ],
];