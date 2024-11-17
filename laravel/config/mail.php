<?php

return [

    'driver' => env('MAIL_DRIVER', 'smtp'),
    'host' => env('MAIL_HOST', 'smtp.yandex.ru'),
    'port' => env('MAIL_PORT', 587),
    'from' => [
        'address' => env('MAIL_USERNAME', 'da-datour@yandex.ru'),
        'name' => 'da-datour',
    ],
    'encryption' => env('MAIL_ENCRYPTION', 'tls'),
    'username' => env('MAIL_USERNAME', 'da-datour@yandex.ru'),
    'password' => env('MAIL_PASSWORD', '123'),

];
