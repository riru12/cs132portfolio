<script>
    import "$lib/css/bento.css"

    import bento1 from "$lib/images/bento1.jpg";
    import bento2 from "$lib/images/bento2.jpg";
    import bento3 from "$lib/images/bento3.jpg";

    import DownwardTrend from "./icons/bento/DownwardTrend.svelte";
    import DownArrow from "./icons/bento/DownArrow.svelte";
</script>

<section id="bento" class="flex justify-center items-center text-white py-16 min-h-auto md:min-h-screen sm:snap-always sm:snap-start">
    <div class="bento text-black">
        <div id="box-1" class="group flex flex-col justify-center items-center special">
            <div class="group-hover:hidden"><h2 class="text-5xl ">22.4%</h2><p class="font-semibold text-2xl">of the Philippines' population are living under the poverty line.</p></div>
            <div class="hidden group-hover:block"><p class="font-semibold text-2xl text-center">That's over</p><h2 class="text-4xl text-center gradient-text">25 million Filipinos</h2><p class="font-semibold text-2xl text-center">who struggle daily</p></div>
        </div>

        <div id="box-2" class="">
            <p class="font-semibold text-md">According to PSA, over <span class="gradient-text">9.79 million</span> of Filipinos are unable to meet their basic food needs <a href="https://www.pna.gov.ph/articles/1215836" class="font-mono">[1]</a></p>
        </div>

        <div id="box-3" class="">
            <p class="font-semibold text-md">NEDA estimates that around <span class="gradient-text">7.2 million</span> are unable to escape poverty due to inflation rates <a href="https://mb.com.ph/2023/12/22/high-inflation-traps-over-7-m-filipinos-in-poverty-1" class="font-mono">[2]</a></p>
        </div>

        <div id="box-4" class="group flex justify-center items-center special">
            <div class="group-hover:hidden"><h2 class="text-center text-5xl">Problem</h2></div>
            <div class="hidden group-hover:block"><p class="font-semibold text-lg text-center">The <span class="gradient-text">continuous struggle</span> of Filipino households in sustaining their daily lives due to the prevalence of poverty in the Philippines</p></div>
        </div>

        <div id="box-5" class="flex flex-col justify-center gap-2">
            <DownwardTrend />
            <p class="font-semibold text-lg">The recent</p><h2 class="text-[1.9rem] gradient-text">COVID-19</h2><p class="font-semibold text-lg">pandemic further exacerbated the issue, pushing many more into poverty. <a href="https://www.reuters.com/world/asia-pacific/pandemic-pushed-millions-more-into-poverty-philippines-govt-2022-08-15/" class="font-mono">[3]</a></p>
        </div>

        <div id="box-6" class="">
            <img src={bento2} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] gray">
        </div>

        <div id="box-7" class="relative">
            <h2 class="absolute z-10 left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] whitespace-nowrap text-4xl text-center"><span class="gradient-text text-7xl">Poverty</span> <br> continues to <br> affect our country</h2>
            <img src={bento1} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] darker-gray">
        </div>

        <div id="box-8" class="group flex justify-center items-center special">
            <div class="group-hover:hidden"><h2 class="text-center text-5xl">Solution</h2></div>
            <div class="hidden group-hover:block"><p class="font-semibold text-lg text-center">Utilizing <span class="gradient-text">data science</span> to <span class="underline decoration-2">identify the factors that negatively affect the finances of Filipino households</span> in hopes of inspiring government or community-driven actions</p></div>
        </div>

        <div id="box-9"  class="">
            <p class="font-semibold text-md">We want to do what we can to reduce the number of families living in unsustainable conditions</p>
        </div>

        <div id="box-10" class="">
            <img src={bento3} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] gray">
        </div>

        <div id="box-11" class="flex flex-col justify-between">
            <p class="font-semibold text-md">Keep scrolling to see what we've discovered</p><DownArrow/>
        </div>

        <div id="box-12" class="">12</div>
    </div>
</section>