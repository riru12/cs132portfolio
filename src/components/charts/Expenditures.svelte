<script>
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
    
	let Labels = ['FOOD', 'FOOD_HOME', 'HOUSING_WATER', 'RENTVAL', 'OTHER_DISBURSEMENT', 'IMPUTED_RENT', 'BREAD', 'MEAT', 'FISH', 'TRANSPORT'];
	let chartCanvas;

    let data = {
        labels: Labels,
        datasets: [
            {
                label: "Highest Average Expenditures",
                backgroundColor: "#E9ED74",
                data: [91081.66824, 83829.86136, 47865.88184, 28644.16215, 27404.58638, 25316.14397, 24936.57602, 14656.79967, 13297.62201, 11505.32303],
            },
        ]
    };

    let options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

	onMount(async () => {
		let ctx = chartCanvas.getContext('2d');
		new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
		});
	});
</script>
<canvas bind:this={chartCanvas} id="myChart" class="py-4 px-4 2xl:mx-24"></canvas>