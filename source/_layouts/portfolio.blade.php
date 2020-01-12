@php

    foreach($participants->where('name', $page->author) as $author)
    {
        dd($author);
    }

@endphp

@extends('_layouts.master')

@section('body')

    {{-- Header Section--}}
    <div class="bg-yellow-500">
        <div class="container py-20">
            <div class="row justify-center">
                <div class="lg:col-8">
                    <h1 class="font-black text-center text-3xl md:text-4xl lg:text-5xl text-blue-500 leading-tight">
                        {{ $page->title }}
                    </h1>
                    <div class="flex flex-row items-center justify-center mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-blue-500 w-6 h-6" fill="none"
                             viewBox="0 0 24 24">
                            <path d="M17 4h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 012 0v1h6V3a1 1 0 012 0v1zm-2 2H9v1a1 1 0 01-2 0V6H5v4h14V6h-2v1a1 1 0 01-2 0V6zm4 6H5v8h14v-8z"/>
                        </svg>
                        <p class="text-blue-500 font-bold text-sm ml-3">{{  date('F j, Y', $page->date) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- Header Section--}}

    <div class="container my-20">
        <div class="row justify-center">
            <div class="md:col-10 lg:col-8">
                @if($page->cover)
                    <img style="max-height: 400px;" class="w-full h-auto object-cover mb-10" src="{{ $page->cover }}"
                         alt="">
                @endif
                <div class="md-content">
                    {!! $page->getContent() !!}
                </div>
            </div>
        </div>
    </div>

    <div class="bg-gray-600">
        <div style="height:2px;" class="w-full bg-gray-500 opacity-25"></div>
        <div class="container py-16">
            <div class="row justify-between">
                <div class="md:col-5">
                    @include('_partials.heading', ['title' => 'About the Author'])

                    <div class="flex flex-col mt-6">
                        @foreach($page->author as $author)
                            @foreach($participants->where('name', $author) as $post)
                                <a href="{{ $post->getUrl() }}" class="flex flex-row items-center mb-5 last:mb-0">
                                    <div class="w-16 h-16">
                                        <img class="w-full h-full object-cover rounded-full" src="{{ $post->image }}" alt="">
                                    </div>
                                    <h4 class="font-bold text-xl text-blue-400 ml-3">{{ $post->name }}</h4>
                                </a>
                            @endforeach
                        @endforeach
                    </div>
                </div>
                <div class="md:col-5 mt-16 md:mt-0">
                    @include('_partials.heading', ['title' => 'Published in'])

                    <div class="flex flex-row mt-6">
                        @foreach($page->published as $key => $value)
                            <a class="text-blue-400 text-xl font-bold mr-1" href="{{ $value }}">{{ $key }}
                                {{ $loop->last ? ' ' : '|' }}
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection