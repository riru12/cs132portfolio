<script>
    import "$lib/css/method.css";
    import PlusIcon from "./icons/methods/PlusIcon.svelte";
    import DummyChart from "./charts/DummyChart.svelte"
    import BarError from "./charts/BarError.svelte";

    function handleSections(event){
        if (event.type === 'click' || (event.type === 'keydown' && (event.key === 'Enter' || event.key === ' '))) {
            const section = event.target.closest('.clickable').parentNode;
            if (section.getAttribute("data-section")){
                section.classList.toggle("active");
            }
        }
    }
</script>


<section id="method" class="mx-12 md:mx-32 lg:mx-64 py-32 flex flex-col items-center">
    <div class="flex flex-row gap-2 mb-10 justify-center">
        <div class="green-text text-3xl font-bold gradient-text">
            04
        </div>
        <div class="text-white text-3xl font-bold">
            Methodology
        </div>
    </div>
    <div on:click={handleSections} on:keydown={handleSections} role="none" class="flex flex-col gap-2 max-w-[60rem]">
        <div data-section=1 class="subsection">
            <div class="flex w-full justify-between items-center p-3 font-semibold clickable">
                Data Preprocessing
                <div class="w-min h-min rounded-full p-1 hover:bg-black"><PlusIcon /></div>
            </div>
            <div> <!-- 1-ROW GRID -->
                <div>
                    <h2>Handling Missing/Null Values</h2>
                    <p>The dataset was checked for null/missing values. The dataset contains a total of 165,029 entries and 88 features and it was confirmed that the dataset does not contain missing or null values as its dimensions remained the same after processing.</p>
                    <h2>Addition of Features</h2>
                    <p>We added certain features which we would use in our statistical analysis, such as a binary column to indicate whether a household receives wages and another if they own or operate a business. We also added a column that computes the net total of a family every month, and each family's financial category.</p>
                    <h2>Dropping Certain Features</h2>
                    <p>However, we also dropped certain features that are redundant and not related to the study such as some of the elements in the breakdowns of the total income and a few nominal features.</p>
                    <h2>Sampling the Data</h2>
                    <p>Due to the huge volume of data, processing it would be time and resource heavy. So, we sampled 10% of the original volume which can be seen in the data section, leaving us with a sampled dataset containing 16,503 entries. We ensured that our sampled data is balanced as per the financial category feature, which means that in our sample there are 5501 entries of households per financial category.</p>
                </div>
            </div>
        </div>
        <div data-section=2 class="subsection">
            <div class="flex w-full justify-between items-center p-3 font-semibold clickable">
                Exploratory Data Analysis
                <div class="w-min h-min rounded-full p-1 hover:bg-black"><PlusIcon /></div>
            </div>
            <div> <!-- 1-ROW GRID -->
                <div>
                    <h2>Feature Selection</h2>
                    <p>Utilizing Random Forest Classifier, we identified the features that impacts a Filipino household's finances the most. The graph below shows the importance value of the top ten identified features.</p>
                    <BarError />
                </div>
            </div>
        </div>
    </div>
</section>