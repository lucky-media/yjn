<div class="bg-white sticky md:h-24 top-0" style="z-index: 9999;">
    <div class="container">
        <div class="row justify-between items-center py-4 text-base text-black">
            <div class="col-2">
                <a href="/">
                    @include('_partials.logo')
                </a>
            </div>

            <div class="col-2 md:hidden block">
                <label for="menu-toggle" class="pointer-cursor">
                    <svg class="fill-current text-blue-500 w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
            </div>

            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="transition opacity-0 hidden flex-col md:opacity-100 md:col-8 md:flex md:flex-row items-center justify-end pt-6 md:pt-0"
                id="menu">
                @foreach($page->menu as $menu)
                <a aria-label="{{ $menu->name }}"
                    class="transition w-full text-center text-xl uppercase font-bold text-gray-500 py-6 border-blue-500 border-b-2 last:border-b-0 md:text-base md:normal-case md:pt-0 md:pb-2 md:border-transparent md:border-b-2 md:hover:border-blue-500 md:w-auto md:mr-6 last:mr-0 hover:text-blue-500 {{ $page->isActive($menu->url) ? 'md:border-blue-500' : '' }}"
                    href="{{ $menu->url }}">{{ $menu->name }}</a>
                @endforeach
            </div>
        </div>
    </div>
</div>