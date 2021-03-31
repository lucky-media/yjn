<div class="col-10 sm:col-6 md:col-4 lg:col-3 mt-16 lg:mt-8">
    <a href="{{ $participant->getUrl() }}">
        <div style="background: url('{{ $participant->image }}') no-repeat center center / cover;"
             class="bg-white h-70 rounded-lg shadow-lg blue-overlay flex flex-col-reverse">
            <div class="w-full absolute z-50">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                     class="absolute left-0 w-full block" style="height: 95px; top: -94px;">
                    <polygon points="-30,95 583,95 583,65" class="text-white fill-current"></polygon>
                </svg>
                <div class="bg-white h-20 px-6 py-3">
                    <h5 class="font-bold text-blue-400">{{ $participant->name }}</h5>
                    @if($participant->position)
                        <p class="text-gray-500 font-bold text-xs">{{ $participant->position }}</p>
                    @endif
                </div>
            </div>
        </div>
    </a>
</div>