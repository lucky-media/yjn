<?php

return [
    'production' => false,
    'baseUrl' => '',
    'siteName' => 'Web Starter',
    'siteDescription' => 'Webstarter template with Jigsaw, Tailwind',
    'collections' => [
        'participants' => [
            'path' => 'participants/{filename}',
            'extends' => '_layouts.participant'
        ]
    ],
    'getDesc' => function($page)
    {
        return strip_tags($page->getContent());
    }
];
