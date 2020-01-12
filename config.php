<?php

return [
    'production' => false,
    'baseUrl' => '',
    'siteName' => 'Young Journalist Network',
    'siteDescription' => 'Powered by Democracy Lab',
    'collections' => [
        'participants' => [
            'path' => 'participants/{filename}',
            'extends' => '_layouts.participant'
        ],
        'portfolio' => [
            'path' => 'portfolio/{filename}',
            'extends' => '_layouts.portfolio'
        ]
    ],
    'getDesc' => function($page)
    {
        return strip_tags($page->getContent());
    }
];
