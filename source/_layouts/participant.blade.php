@extends('_layouts.master')

@section('body')

    @include('_partials.yellow-header', ['title' => $page->name])

    <div class="container mt-32 mb-56">
        <div class="row justify-between">
           <div class="col-5 offset-1">
               <img style="max-height: 650px;" class="w-full h-auto object-cover" src="{{ $page->image }}" alt="">
           </div>
            <div class="col-5 md-content">
                {!! $page->getContent() !!}
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-5">
                @include('_partials.heading', ['title' => 'Published work'])
            </div>
        </div>
    </div>

@endsection