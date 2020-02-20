<div class="bg-yellow-500">
    <div class="container py-20">
        <div class="row">
            <div class="lg:col-8">
                <h1 class="font-black text-3xl md:text-6xl text-blue-500 leading-tight">
                    {{ $title }}
                </h1>
                @if(isset($desc))
                    <p class="text-xl md:text-2xl font-black text-blue-500">{{ $desc }}</p>
                @endif
            </div>
        </div>
    </div>
</div>