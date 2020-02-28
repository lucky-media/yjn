<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="description" content="{{ $page->siteDescription }}">
    <meta property="og:title" content="{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->getUrl() }}" />
    <meta property="og:description" content="{{ $page->siteDescription }}" />
    <meta property="og:image" content="{{ $page->cover ? $page->cover : '/assets/images/meta.jpg' }}" />

    @stack('meta')
    <title>{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}</title>

    {{-- Styles --}}
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500,700,900&display=swap" rel="stylesheet">

    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png">
    <link rel="manifest" href="/assets/images/favicons/site.webmanifest">
    <link rel="mask-icon" href="/assets/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    @stack('styles')
</head>

<body class="bg-gray-200 font-sans antialiased flex flex-col">
    <div id="app">
        {{-- Menu --}}
        @include('_partials.menu')

        {{-- Content --}}
        @yield('body')
    </div>

    <footer>
        <div class="bg-blue-600">
            <div class="container">
                <div class="row py-10">
                    <div class="col-12 md:col-6 lg:col-3 flex flex-row justify-center">
                        <img class="w-auto h-16 mr-2" src="/assets/images/demlab.png" srcset="/assets/images/demlab@2x.png" alt="Democracy Lab">
                        <img class="w-auto h-16" src="/assets/images/embassy.jpg" srcset="/assets/images/embassy@2x.jpg" alt="US Embassy Skopje">
                    </div>
                    <div class="col-12 md:col-6 lg:col-9 text-xs text-white text-center mt-8 md:mt-0">
                        This website is a product of the project “Young Journalists’ Network” implemented by Democracy Lab. This project was funded through a U.S. Embassy grant. The opinions, findings, and conclusions or recommendations expressed herein are those of the implementers/authors and do not necessarily reflect those of the U.S. Government.
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-700">
            <div class="container">
                <div class="row py-5">
                    <div class="col-12">
                        <p class="text-xs md:text-sm text-white">© Copyright 2020 -  Made with
                            <span class="text-yellow-500">&#9829;</span> from
                            <a class="font-bold pb-2 border-b-2 border-transparent hover:border-yellow-500"
                               href="http://www.luckymedia.mk">Lucky Media</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>

</html>