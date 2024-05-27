<script>
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
    
	let Labels = ['FOOD', 'FOOD_HOME', 'HOUSING_WATER', 'RENTVAL', 'IMPUTED_RENT', 'BREAD', 'OTHER_DISBURSEMENT', 'MEAT', 'FISH', 'TRANSPORT'];
	let chartCanvas;

    let data = {
        labels: Labels,
        datasets: [
            {
                label: "Highest Average Expenditures",
                backgroundColor: "#E9ED74",
                data: [93594.9347, 86052.6787, 51289.6793, 30833.8357, 27631.4715, 25365.4803, 24004.3483, 15380.7871, 13513.7751, 12146.4745],
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