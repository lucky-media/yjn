<div class="md:col-6 lg:col-4 mt-16 lg:mt-10">
    <a href="{{ $news->getPath() }}">
        <img style="max-height: 240px;" class="w-full h-auto object-cover" src="{{ $news->cover }}" alt="">
        @if(isset($news->author))
        <div class="bg-yellow-500 inline-flex items-center px-3 py-4 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="block fill-current w-6 h-6 text-blue-500" fill="none"
                viewBox="0 0 16 16">
                <path fill="#1E2057"
                    d="M8 8a3.333 3.333 0 110-6.667A3.333 3.333 0 018 8zm0-1.333a2 2 0 100-4 2 2 0 000 4zM14 14a.666.666 0 11-1.333 0v-1.333a2 2 0 00-2-2H5.333a2 2 0 00-2 2V14A.667.667 0 112 14v-1.333a3.333 3.333 0 013.333-3.334h5.334A3.333 3.333 0 0114 12.667V14z" />
            </svg>
            <p class="text-blue-500 text-xs ml-3">
                @if(count($news->author) > 2)
                Multiple Authors
                @else
                @foreach ($news->author as $item )
                {{ $item }}
                @endforeach
                @endif
            </p>
        </div>
        @endif
        <div class="flex flex-row justify-center mt-5">
            <div class="w-2 bg-yellow-500 mr-3"></div>
            <p class="text-blue-500 font-bold text-2xl leading-tight">
                {{ $news->title }}
            </p>
        </div>
        <p class="text-gray-500 text-sm text-justify mt-5">
            {{ $news->desc }}
        </p>
        <div class="w-full h-12 bg-gray-600 mt-6 px-4 flex items-center justify-between">
            <div class="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current text-blue-500 w-6 h-6" fill="none"
                    viewBox="0 0 24 24">
                    <path
                        d="M17 4h2a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h2V3a1 1 0 012 0v1h6V3a1 1 0 012 0v1zm-2 2H9v1a1 1 0 01-2 0V6H5v4h14V6h-2v1a1 1 0 01-2 0V6zm4 6H5v8h14v-8z" />
                </svg>
                <p class="text-blue-500 font-medium text-sm ml-3">{{ date('F j, Y', $news->date) }}</p>
            </div>
            <p class="text-blue-500 font-bold text-sm">Read More</p>
        </div>
    </a>
</div>