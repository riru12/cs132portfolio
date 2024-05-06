<script>
    import heroimg from "../assets/images/hero.jpg";
    import "../assets/css/gray.css"
</script>

<section id="hero">
        <div class="relative w-screen h-screen bg-black overflow-hidden">
            <div class="absolute z-40 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                <div class="text-white font-bold text-6xl md:text-8xl">
                    <span class="sdgred">One </span>in five people in the Philippines lives in <span class="sdgred">extreme poverty</span>.
                </div>
            </div>
            <img src={heroimg} alt="" class="min-h-full md:min-w-full object-cover gray">
            <div class="absolute h-32 w-full bottom-0 bg-gradient-to-b from-transparent to-black z-40 pointer-events-none"></div>
        </div>
</section>