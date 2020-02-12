@extends('_layouts.master')

@section('body')
@include('_partials.yellow-header', ['title' => 'Portfolio'])

<div class="container pt-10 pb-20">
    <div class="row">
        @foreach ($portfolio_mk as $item)
        @include('_partials.news', ['news' => $item])
        @endforeach
    </div>
</div>
@endsection