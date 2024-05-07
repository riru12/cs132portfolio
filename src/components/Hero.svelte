<script>
    import heroimg from "$lib/images/hero.jpg";
    import "$lib/css/gray.css"
</script>

<section id="hero" class="snap-always snap-start">
        <div class="relative w-screen h-screen bg-black overflow-hidden">
            <div class="absolute h-32 w-full top-0 bg-gradient-to-b from-black to-transparent z-40 pointer-events-none"></div>
            <div class="absolute z-40 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                <div class="text-white font-bold text-6xl lg:text-7xl xl:text-8xl">
                    <span class="greentext">One </span>in five people in the Philippines lives in <span class="greentext">extreme poverty</span>.
                </div>
            </div>
            <img src={heroimg} alt="" class="min-h-full md:min-w-full object-cover gray">
            <div class="absolute h-32 w-full bottom-0 bg-gradient-to-b from-transparent to-black z-40 pointer-events-none"></div>
        </div>
</section>