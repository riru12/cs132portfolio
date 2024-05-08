<script>
    import article1 from "$lib/images/article1.jpg";
    import article2 from "$lib/images/article2.jpg";
    import article3 from "$lib/images/article3.jpg";
    import article4 from "$lib/images/article4.jpg";
    import bento3 from "$lib/images/bento3.jpg";
</script>

<section id="background" class="py-16 min-h-auto md:min-h-screen justify-center flex flex-col sm:snap-always sm:snap-start">
    <div class="flex flex-row gap-2 mb-10 justify-center">
        <div class="green-text text-3xl font-bold gradient-text">
            02
        </div>
        <div class="text-white text-3xl font-bold">
            Background
        </div>
    </div>
    <div class="relative w-full h-full">
        <div class="absolute bg-gradient-to-l from-black to-transparent h-full w-12 md:w-24 right-0 z-50"></div>
        <div class="flex relative gap-4 overflow-x-scroll px-12 sm:px-20">
            <div class="flex relative rounded-3xl min-h-[32rem] max-w-[24rem] bg-[#232323] shrink-0">
                <a href="https://www.pna.gov.ph/articles/1215836" target="_blank">
                    <div class="absolute z-10 left-8 top-8 right-8 text-white">
                        <p>Philippine News Agency</p>
                        <p class="text-3xl font-bold">PH poverty rate declines to 22.4% in 1st half 2023</p>
                    </div>
                </a>
                <img src={article1} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] darker-gray">
            </div>
            <div class="flex relative rounded-3xl min-h-[32rem] max-w-[24rem] bg-[#232323] shrink-0">
                <a href="https://mb.com.ph/2023/12/22/high-inflation-traps-over-7-m-filipinos-in-poverty-1" target="_blank">
                    <div class="absolute z-10 left-8 top-8 right-8 text-white">
                        <p>Manila Bulletin</p>
                        <p class="text-3xl font-bold">High inflation traps over 7 M Filipinos in poverty</p>
                    </div>
                </a>
                <img src={article2} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] darker-gray">
            </div>
            <div class="flex relative rounded-3xl min-h-[32rem] max-w-[24rem] bg-[#232323] shrink-0">
                <a href="https://www.reuters.com/world/asia-pacific/pandemic-pushed-millions-more-into-poverty-philippines-govt-2022-08-15/" target="_blank">
                    <div class="absolute z-10 left-8 top-8 right-8 text-white">
                        <p>Reuters</p>
                        <p class="text-3xl font-bold">Pandemic pushed millions more into poverty in the Philippines, government says</p>
                    </div>
                </a>
                <img src={article3} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] darker-gray">
            </div>
            <div class="flex relative rounded-3xl min-h-[32rem] max-w-[24rem] bg-[#232323] shrink-0">
                <a href="https://phkule.org/article/1097/poorest-filipinos-affected-more-by-high-inflation-ibon" target="_blank">
                    <div class="absolute z-10 left-8 top-8 right-8 text-white">
                        <p>Philippine Collegian</p>
                        <p class="text-3xl font-bold">Poorest Filipinos Affected More by High Inflation—IBON</p>
                    </div>
                </a>
                <img src={article4} alt="" class="min-h-full md:min-w-full object-cover rounded-[1.5rem] darker-gray">
            </div>
            <div class="flex justify-center items-center rounded-3xl min-h-[32rem] max-w-[24rem] bg-[#141414] shrink-0">
                <div class="text-white font-bold text-2xl gray-text text-center p-16">...steps are being taken, but <span class="text-white">further action</span> may be <span class="gradient-text">needed</span>.</div>
            </div>
        </div>

    </div>
</section>