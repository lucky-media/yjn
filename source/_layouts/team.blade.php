@extends('_layouts.master')

@section('body')

@include('_partials.yellow-header', ['title' => $page->name, 'desc' => $page->position])

<div class="container mt-20 mb-20  md:mb-32 md:mt-32">
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
@endsection