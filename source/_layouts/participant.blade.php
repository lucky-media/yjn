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

    </div>
</div>

@endsection