@extends('_layouts.master')

@section('body')
@include('_partials.yellow-header', ['title' => 'Meet the Team'])

<div class="container my-24">
    <div class="row justify-center">
        @foreach($team as $item)
        @include('_partials.card', ['participant' => $item])
        @endforeach
    </div>
</div>
@endsection