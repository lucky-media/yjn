<div class="md:col-6 xl:col-4 mt-10">
    <a href="{{ $trainer->getUrl() }}">
        <div class="flex flex-row items-center">
            <div class="lg:w-24 lg:h-24 w-16 h-16">
                <img src="{{ $trainer->image }}" class="w-full h-full rounded-full object-cover" alt="">
            </div>
            <div class="flex flex-col ml-5">
                <h1 class="font-bold text-blue-400 text-xl">{{ $trainer->name }}</h1>
                <p class="text-gray-500 hover:text-blue-400 font-bold text-justify text-sm mt-3">
                    Read More
                </p>
            </div>
        </div>
    </a>
</div>