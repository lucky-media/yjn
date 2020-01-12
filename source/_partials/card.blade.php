<div class="col-3 mt-8">
    <a href="#">
        <div style="height: 350px;" class="bg-white rounded-lg shadow-lg blue-overlay flex flex-col-reverse">
            <img src="{{ $image }}" class="max-w-full h-ful object-cover absolute" alt="">
            <div class="w-full absolute z-50">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                    class="absolute left-0 w-full block" style="height: 95px; top: -94px;">
                    <polygon points="-30,95 583,95 583,65" class="text-white fill-current"></polygon>
                </svg>
                <div class="bg-white h-16 px-6 py-3">
                    <h5 class="font-bold text-blue-400">{{ $name }}</h5>
                </div>
            </div>
        </div>
    </a>
</div>