<script>
    import "$lib/css/method.css";
    import PlusIcon from "./icons/methods/PlusIcon.svelte";
    import BarError from "./charts/BarError.svelte";
    import GroupedBarWages from "./charts/GroupedBar-Wages.svelte";
    import GroupedBarBusiness from "./charts/GroupedBar-Business.svelte";
    import Expenditures from "./charts/Expenditures.svelte";

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
                    <h2>Visualization of Expenditures</h2>
                    <p>We've identified the top 10 expenditures on average per Filipino household. Expectedly, the data reveals that food constitutes a large part of the yearly expenses of a household. Besides this, other factors such as water supply, rent, and transport also make up a large portion of an average family's budget.</p>
                    <Expenditures />
                    <h2>Feature Selection</h2>
                    <p>To answer our primary question of identifying which factors most negatively affect Filipino households' finances the most, we utilized the Random Forest Classifier algorithm in a feature importance analysis. The graph below shows the importance value of the top ten identified features.</p>
                    <BarError />
                    <p>This data reveals that non-food expenditure, water supply, and bread, among others, seem to impact family finances the most. We can thus reject the null hypothesis and accept the alternative hypothesis as we have identified correlation between various factors and financial well-being among Filipino families.</p>
                    <br><h2>Effect of Wages on Finances</h2>
                    <p>In our analysis, we wanted to seek the answer to the question <span class="italic">"Do households with regular wages coming from employment exhibit different patterns of negative income compared to those relying primarily other sources of income?"</span></p>
                    <div class="flex p-4 gap-4 flex-wrap sm:flex-nowrap">
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full justify-center">
                            <p class="text-center font-bold">Null Hypothesis</p>
                            <p class="text-center">There is no significant difference between households that have wages from employment and those that don't</p>
                        </div>
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full justify-center">
                            <p class="text-center font-bold">Alternative Hypothesis</p>
                            <p class="text-center">There is a significant difference between households that have wages from employment and those that don't</p>
                        </div>
                    </div>
                    <p>To do so, we utilized a chi-squared test to see if there is a significant difference between households with and without wages. Here's what we got:</p>
                    <div class="flex p-4 gap-4 flex-wrap sm:flex-nowrap mx-4">
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full gap-2">
                            <p class="text-center font-bold">Chi-squared statistic</p>
                            <p class="text-center font-mono"><span class="text-2xl">270.93991</span></p>
                        </div>
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full gap-2">
                            <p class="text-center font-bold">P-value</p>
                            <p class="text-center font-mono"><span class="text-2xl">1.46604e-59</span></p>
                        </div>
                    </div>
                    <p>The p-value is less than 0.05. Hence, we reject the null hypothesis and accept the alternative hypothesis. This implies that there is a significant difference between households that have regular wages from employment and those who do not.</p>
                    <br><p>The number of households that have wages (employment income) in the high category is significantly greater than the  number of households without wages. This implies that having employment income or wages in a household can help in improving their financial status. However, the financial category of a household can still be affected by multiple factors (mainly their expenditures) which explains why there are still households(with employment income) that are in the moderate and low financial category.</p>
                    <GroupedBarWages />
                    <br><h2>Effect of Business Ownership on Finances</h2>
                    <p>We also wanted to answer the question <span class="italic">"Do households with higher levels of entrepreneurial activities exhibit different patterns of negative income compared to those relying primarily on wage employment or other sources of income?"</span></p>
                    <div class="flex p-4 gap-4 flex-wrap sm:flex-nowrap mx-4">
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full justify-center">
                            <p class="text-center font-bold">Null Hypothesis</p>
                            <p class="text-center">There is no significant difference between households that have a business and those that don't</p>
                        </div>
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full justify-center">
                            <p class="text-center font-bold">Alternative Hypothesis</p>
                            <p class="text-center">There is a significant difference between households that have a business and those that don't</p>
                        </div>
                    </div>
                    <p>To do so, we utilized a chi-squared test to see if there is a significant difference between households with and without a business or entrepreneurship. Here's what we got:</p>
                    <div class="flex p-4 gap-4 flex-wrap sm:flex-nowrap">
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full gap-2">
                            <p class="text-center font-bold">Chi-squared statistic</p>
                            <p class="text-center font-mono"><span class="text-2xl">23.64858</span></p>
                        </div>
                        <div class="flex flex-col bg-neutral-800 p-4 rounded-2xl basis-full gap-2">
                            <p class="text-center font-bold">P-value</p>
                            <p class="text-center font-mono"><span class="text-2xl">7.32447e-06</span></p>
                        </div>
                    </div>
                    <p>The p-value is less than 0.05. Hence, we reject the null hypothesis and accept the alternative hypothesis. This implies that there is a significant difference between households that have a business or entrepreneurial income and households that do not.</p>
                    <br><p>The number of households that have businesses or entrepreneurial activities in high category is greater than the  number of households without businesses. This implies that having a business or doing entrepreneurial activities can help in improving their financial status. However, the financial category of a household can still be affected by multiple factors (mainly their expenditures and in this case their business losses) which explains why there are still households  (with entrepreneurial activities) that are in the moderate and low financial category. Moreover, households' (that don't have entrepreneurial activities) financial category can also be improved by the presence of other sources of income which explains the number of households in the high category for those without entrepreneurial activities.</p>
                    <GroupedBarBusiness />
                </div>
            </div>
        </div>
    </div>
</section>