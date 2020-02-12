@extends('_layouts.master')

@section('body')
<div class="bg-yellow-500">
    <div class="container py-24 lg:py-32">
        <div class="row">
            <div class="lg:col-8">
                <h1 class="font-black text-2xl lg:text-5xl text-blue-500 leading-tight">
                    Young Journalists’ Network
                </h1>
            </div>
        </div>
    </div>
</div>

<div class="container mt-24 mb-32">
    <div class="row justify-between">
        <div class="md:col-6">
            @include('_partials.heading', ['title' => 'About the project'])
            <p class="text-gray-500 text-justify font-medium mt-8">
                Democracy Lab’s “Young Journalists’ Network“ supported by the Media Mentorship Program of the US
                Embassy
                in Skopje, will
                build the capacities of young journalists in news gathering and reporting through a year-long series
                of
                professional
                trainings and internship opportunities.
                YJN aims to create and sustain a network of young, independent-minded journalists, committed to the
                principles of
                ethical and independent journalism. Through their participation in the program, participants will
                build
                their capacities
                in news gathering and reporting through a year-long series of professional trainings and internship
                opportunities.
                The trainings will be designed and facilitated by international experts in cooperation with local
                experts. Topics will
                include:

                <ul class="list-disc font-medium text-gray-500 mt-4 px-5">
                    <li>The role of journalism in democratic society & ethical journalism;</li>
                    <li>Investigative reporting techniques.</li>
                    <li>Data analysis and Visualization.</li>
                    <li>Digital media tools and platforms.</li>
                    <li>Working with government institutions.</li>
                    <li>Communication Skills.</li>
                    <li>Networking and Cooperation.</li>
                </ul>
            </p>
        </div>
        <div class="md:col-6  mt-10 md:mt-0">
            @include('_partials.heading', ['title' => 'About Democracy Lab'])
            <p class="text-gray-500 text-justify font-medium mt-8 mb-5">
                We serve as a hub for international, regional and local experts to share their knowledge and insight
                on
                democracy
                building processes. Democracy Lab is committed to building networks and partnerships focused on
                developing and
                sustaining a functional democratic system in North Macedonia and Western Balkan States.
                <br> <br>
                We aim to connect different Civic Society Organizations to enhance their human capacities, share
                experiences and
                knowledge, build coalitions and provide tools and resources to enforce democracy and its values.
            </p>
            <a class="text-blue-400 font-bold hover:text-blue-500" href="https://www.demlab.org/">Visit our
                website</a>
        </div>
    </div>
</div>

<a href="/participants">
    <div class="blue-cover flex justify-center items-center">
        <h1 class="text-4xl sm:text-5xl text-white text-center font-black absolute z-20">Meet our Participants</h1>
    </div>
</a>

{{-- Trainers --}}
<div class="bg-gray-600">
    <div style="height:2px;" class="w-full bg-gray-500 opacity-25"></div>
    <div class="container py-24">
        <div class="row">
            <div class="md:col-5">
                @include('_partials.heading', ['title' => 'Our Trainers'])
            </div>
        </div>
        <div class="row">
            @foreach($trainers as $trainer)
            @include('_partials.trainer', ['trainer' => $trainer])
            @endforeach
        </div>
    </div>
</div>

@endsection