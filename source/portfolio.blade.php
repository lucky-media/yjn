@extends('_layouts.master')

@section('body')
    @include('_partials.yellow-header', ['title' => 'Portfolio'])

    <div class="container pt-10 pb-20">
        <div class="row">
            @for ($i = 1; $i < 10; $i++)
                @include('_partials.news', ['title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nisi,', 'image' => '/assets/images/news.jpg', 'date' => '21 September 2019', 'author' => 'Sefer Selimi'])
            @endfor
        </div>
    </div>
@endsection