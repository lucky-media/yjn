@extends('_layouts.master')

@section('body')

    @include('_partials.yellow-header', ['title' => $page->name])

    <div class="container mt-20 mb-24 md:mt-32 md:mb-56">
        <div class="row justify-between">
            <div class="md:col-6">
                <img style="max-height: 650px;" class="w-full h-auto object-cover mb-10 md:mb-0" src="{{ $page->image }}" alt="">
            </div>
            <div class="md:col-6 md-content">
                {!! $page->getContent() !!}
            </div>
        </div>
    </div>

    <div class="container mb-32">
        <div class="row">
            <div class="md:col-5">
                @include('_partials.heading', ['title' => 'Published work'])
            </div>
        </div>
        <div class="row">
            @for ($i = 1; $i < 5; $i++)
                @include('_partials.news', ['title' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis nisi,', 'image' => '/assets/images/news.jpg', 'date' => '21 September 2019'])
            @endfor
        </div>
    </div>

@endsection