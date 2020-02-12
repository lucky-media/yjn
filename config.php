<?php

return [
    'production' => false,
    'baseUrl' => 'https://dem-yjn.netlify.com/',
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
        'portfolio_al' => [
            'path' => 'portfolio/{lang}/{filename}',
            'sort' => '-date',
            'lang' => 'al',
            'extends' => '_layouts.portfolio',
        ],
        'portfolio_mk' => [
            'path' => 'portfolio/{lang}/{filename}',
            'sort' => '-date',
            'lang' => 'mk',
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

    'getDate' => function ($page) {
        return Datetime::createFromFormat('U', $page->date);
    },

    'getShortDescription' => function ($page) {

        $string = strip_tags($page->getContent());

        $stringCut = substr($string, 0, 120);

        $string = substr($stringCut, 0, strrpos($stringCut, ' ')) . '....';

        return $string;

    },
];
