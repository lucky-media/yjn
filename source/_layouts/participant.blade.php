@php
$authorPosts = $portfolio_mk->filter(function ($value, $key) use ($page) {
    return in_array($page->name, $value->author);
});
@endphp

@push('meta')
    <meta property="og:title" content="{{ $page->siteName }} | {{ $page->name }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ $page->getUrl() }}"/>
    <meta property="og:description" content="{{ $page->getShortDescription() }}" />
    <meta property="og:image" content="{{ $page->image }}" />
@endpush

@extends('_layouts.master')

@section('body')

    @include('_partials.yellow-header', ['title' => $page->name])

    <div class="container mt-20 mb-5 md:mt-32">
        <div class="row justify-between">
            <div class="md:col-6">
                <img style="max-height: 800px;" class="w-full h-auto object-cover mb-10 md:mb-0"
                     srcset="{{ $page->image_lg }}" src="{{ $page->image }}" alt="{{ $page->name }}">
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
            @if($authorPosts->count() > 0)
                @foreach($authorPosts as $post)
                    @include('_partials.news', ['news' => $post])
                @endforeach
            @else
                <div class="col-12 mt-6">
                    <p class="text-blue-700">No published posts yet.</p>
                </div>
            @endif
        </div>
    </div>

@endsection
