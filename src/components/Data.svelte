<script lang="ts">
    import LinkIcon from "./icons/data/LinkIcon.svelte";
</script>

<section id="data" class="mx-12 md:mx-32 lg:mx-64 py-16 min-h-auto min-h-screen justify-center flex flex-col sm:snap-always sm:snap-start">
    <div class="flex flex-row gap-2 mb-10 justify-center">
        <div class="green-text text-3xl font-bold gradient-text">
            03
        </div>
        <div class="text-white text-3xl font-bold">
            Data Collection
        </div>
    </div>
    <div class="flex flex-col items-center">
        <div class="flex flex-col xl:flex-row justify-center items-center gap-10 mb-4">
            <div class="flex flex-col">
                <div class="text-white font-bold text-2xl 2xl:text-4xl mb-8">
                    We contacted the <span class="gradient-text">Philippine Statistics Authority's (PSA)</span> archive to gain access to our dataset. 
                </div>
                <div class="gray-text text-lg sm:text-xl xl:text-2xl">
                    We will be using a sample of their latest (as of the time of writing) dataset from the year 2021 in analyzing the factors relating to Filipino poverty. Their data contains information regarding the salary and wages of different Filipino households and their expenses. The original data can be found <a href="https://psada.psa.gov.ph/catalog/FIES/about" target="_blank" class="gradient-text font-semibold">here</a>.
                </div>
            </div>
            <div class="flex justify-center items-center px-4 gap-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-1 xl:grid-cols-1 w-max gap-4">
                    <div class="text-white flex flex-col justify-center items-center bg-[#232323] rounded-3xl p-5 sm:p-6 2xl:p-8 w-full">
                        <p class="text-center text-5xl font-bold gradient-text">88</p>
                        <p class="text-center text-xl">features / columns</p>
                    </div>
                    <div class="text-white flex flex-col justify-center items-center bg-[#232323] rounded-3xl p-5 sm:p-6 2xl:p-8 w-full">
                        <p class="text-center text-5xl font-bold gradient-text">165,029</p>
                        <p class="text-center text-xl">entries / rows</p>
                    </div>
                </div>
            </div>
        </div>
            <a href="https://docs.google.com/spreadsheets/d/12MIDVSnERx91BxbVeHTM004SsnOj1-R9O43Q1hUPsHA/edit#gid=1046726595" target="_blank" class="bg-[#232323] w-min rounded-xl whitespace-nowrap font-semibold px-6 py-4 text-white flex flex-row gap-2 hover:bg-[#323232] hover:border-[1px] hover:border-[#575757]"><LinkIcon />Explore the sampled dataset</a>
    </div>

</section>