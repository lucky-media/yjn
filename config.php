<?php

return [
    'production' => false,
    'baseUrl' => '',
    'siteName' => 'Young Journalist Network',
    'siteDescription' => 'Powered by Democracy Lab',
    'collections' => [
        'participants' => [
            'path' => 'participants/{filename}',
            'extends' => '_layouts.participant',
        ],
        'trainers' => [
            'path' => 'trainers/{filename}',
            'extends' => '_layouts.trainer',
        ],
        'portfolio' => [
            'path' => 'portfolio/{filename}',
            'extends' => '_layouts.portfolio',
        ],
    ],
    'menu' => [
        [
            'name' => 'Home',
            'url' => '/',
        ],
        [
            'name' => 'Participants',
            'url' => '/participants',
        ],
        [
            'name' => 'Team',
            'url' => '/team',
        ],
        [
            'name' => 'Portfolio',
            'url' => '/portfolio',
        ],
    ],
    'isActive' => function ($page, $path) {
        return ends_with(trimPath($page->getPath()), trimPath($path));
    },
    'getDesc' => function ($page) {
        return strip_tags($page->getContent());
    },
];
