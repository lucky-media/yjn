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
    <meta property="og:image" content="{{ $page->cover ? $page->cover : '/assets/images/lucky-meta.png' }}" />

    @stack('meta')
    <title>{{ $page->title ?  $page->title . ' | ' : '' }}{{ $page->siteName }}</title>

    {{-- Styles --}}
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <link href="https://fonts.googleapis.com/css?family=Raleway:500,700,900&display=swap" rel="stylesheet">

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
        <div class="bg-blue-700">
            <div class="container">
                <div class="row py-10">
                    <div class="col-12 text-center">
                        <p class="text-lg text-white">Copyright</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-blue-600">
            <div class="container">
                <div class="row py-5">
                    <div class="col-12">
                        <p class="text-white">Copyright 2019 Democracy Lab.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
</body>

</html>