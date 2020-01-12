@extends('_layouts.master')

@section('body')
    @include('_partials.yellow-header', ['title' => 'Participants'])

    <div class="container my-24">
        <div class="row">
            @for ($i = 1; $i < 10; $i++)
                @include('_partials.card', ['name' => 'Name Surname', 'image' => '/assets/images/portrait.jpg'])
            @endfor
        </div>
    </div>
@endsection