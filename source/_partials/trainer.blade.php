<div class="col-6 mt-16">
    <div class="row flex-row">
        <div class="col-4">
            <div class="w-40 h-40">
                <img src="{{ $image }}" class="w-full h-full rounded-full object-cover"
                     alt="">
            </div>
        </div>
        <div class="col-8">
            <div class="bg-white px-6 py-6">
                <h1 class="font-bold text-blue-400 text-2xl">{{ $name }}</h1>
                <p class="text-gray-500 text-justify text-sm mt-5">
                   {{ $bio }}
                </p>
            </div>
        </div>
    </div>
</div>