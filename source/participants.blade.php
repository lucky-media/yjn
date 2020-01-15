@extends('_layouts.master')

@section('body')
@include('_partials.yellow-header', ['title' => 'Participants'])

<div class="container my-24">
    <div class="row justify-center">
        @foreach ($participants as $participant)
        @include('_partials.card', ['participant' => $participant])
        @endforeach
    </div>
</div>
@endsection