@extends('_layouts.master')

@section('body')
    <div class="bg-yellow-500">
        <div class="container py-24 lg:py-32">
            <div class="row">
                <div class="lg:col-8">
                    <h1 class="font-black text-2xl lg:text-5xl xl:text-7xl text-blue-500 leading-tight">
                        We provide texts that make a huge impact.
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-24 mb-48">
        <div class="row justify-between">
            <div class="md:col-6 lg:col-5">
                @include('_partials.heading', ['title' => 'About the project'])
                <p class="text-gray-500 text-justify font-medium mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed sed nullam urna malesuada
                    fermentum.
                    Dolor cras nisl,
                    et id ultricies morbi aliquam amet, non. Magna ac sed integer pulvinar iaculis.
                    <br/> <br/>
                    Malesuada eget ac
                    convallis mauris,
                    diam. Mi condimentum at enim morbi netus. A porttitor eget sed viverra viverra commodo ut volutpat
                    at.
                    Adipiscing nulla
                    nibh lacus, in ullamcorper. Nunc ut fermentum quam posuere in justo. Varius gravida at nunc,
                    pulvinar
                    commodo viverra
                    non quis.
                </p>
            </div>
            <div class="md:col-6 lg:col-5 mt-10 md:mt-0">
                @include('_partials.heading', ['title' => 'About Democracy Lab'])
                <p class="text-gray-500 text-justify font-medium mt-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sed sed nullam urna malesuada
                    fermentum.
                    Dolor cras nisl,
                    et id ultricies morbi aliquam amet, non. Magna ac sed integer pulvinar iaculis.
                    <br/> <br/>
                    Malesuada eget ac
                    convallis mauris,
                    diam. Mi condimentum at enim morbi netus. A porttitor eget sed viverra viverra commodo ut volutpat
                    at.
                    Adipiscing nulla
                    nibh lacus, in ullamcorper. Nunc ut fermentum quam posuere in justo. Varius gravida at nunc,
                    pulvinar
                    commodo viverra
                    non quis.
                </p>
            </div>
        </div>
    </div>

    {{-- Participants --}}
    <div class="container">
        <div class="row">
            <div class="col-5">
                @include('_partials.heading', ['title' => 'Participants'])
            </div>
        </div>

        <div class="row justify-center mb-24">
            @for ($i = 1; $i < 10; $i++)
                @include('_partials.card', ['name' => 'Name Surname', 'image' => '/assets/images/portrait.jpg'])
            @endfor
        </div>
    </div>

    {{-- Trainers --}}
    <div class="bg-gray-600">
        <div style="height:2px;" class="w-full bg-gray-500 opacity-25"></div>
        <div class="container py-24">
            <div class="row">
                <div class="col-5">
                    @include('_partials.heading', ['title' => 'Experts'])
                </div>
            </div>
            <div class="row justify-center">
                @for ($i = 0; $i < 6; $i++)
                    @include('_partials.trainer', ['name' => 'Trainer', 'image' => '/assets/images/portrait.jpg', 'bio' => 'Lorem'])
                @endfor
            </div>
        </div>
    </div>

@endsection