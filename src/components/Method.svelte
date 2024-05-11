<script>
    import "$lib/css/method.css";
    import PlusIcon from "./icons/methods/PlusIcon.svelte";

    function handleSections(event){
        if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
            const section = event.target.closest('.subsection');
            if (section.getAttribute("data-section")){
                section.classList.toggle("active");
            }
        }
    }
</script>


<section id="method" class="mx-12 md:mx-32 lg:mx-64 py-32 flex flex-col">
    <div class="flex flex-row gap-2 mb-10 justify-center">
        <div class="green-text text-3xl font-bold gradient-text">
            04
        </div>
        <div class="text-white text-3xl font-bold">
            Methodology
        </div>
    </div>
    <div on:click={handleSections} on:keydown={handleSections} role="none" class="flex flex-col items-content gap-2">
        <div data-section=1 class="subsection" tabindex="0" role="button">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="font-bold p-2">
                    Data Preprocessing
                </div>
                <div class="h-min w-min p-2 rounded-[50%] hover:bg-black">
                    <PlusIcon/>
                </div>
            </div>
            <div class="">
                <div class="p-6">
                    <div class="py-2">
                        <h2 class="text-lg py-2 font-semibold">Handling Missing/Null Values</h2>
                        <p>The dataset from PSA was checked for null/missing values. As mentioned, the dataset contains a total of 165,029 entries and 88 features and upon identifying any null values, it was confirmed that there there were neither missing nor null values within the dataset.</p>
                    </div>
                    <div class="py-2">
                        <h2 class="text-lg py-2 font-semibold">Sampling the Data</h2>
                        <p>Due to the huge volume of data, processing it would be time and resource heavy. So, we sampled 10% of the original volume of the dataset, leaving us with a sampled dataset containing 16,503 entries. Check out the sampled dataset in the Data section above!</p>
                    </div>
                    <div class="py-2">
                        <h2 class="text-lg py-2 font-semibold">Addition and Dropping of Certain Features</h2>
                        <p>We added a column which computes for the net income of a family, equal to their total income minus their expenditures. We also dropped certain features (columns) that are redundant and not related to the study such as some of the elements in the breakdowns of the total income and a few nominal features.</p>
                    </div>
                </div>
            </div>
        </div>
        <div data-section=2 class="subsection" tabindex="0" role="button">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="font-bold p-2">
                    Visualization
                </div>
                <div class="h-min w-min p-2 rounded-[50%] hover:bg-black">
                    <PlusIcon/>
                </div>
            </div>
            <div class="">
                <div class="p-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
        <div data-section=3 class="subsection" tabindex="0" role="button">
            <div class="flex flex-row justify-between items-center px-4">
                <div class="font-bold p-2">
                    Graphs
                </div>
                <div class="h-min w-min p-2 rounded-[50%] hover:bg-black">
                    <PlusIcon/>
                </div>
            </div>
            <div class="">
                <div class="p-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    </div>
</section>