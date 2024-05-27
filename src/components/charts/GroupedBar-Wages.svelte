<script>
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
    
	let Labels = ["Low Finances", "Medium Finances", "High Finances"];
	let chartCanvas;

    let config = {
        labels: Labels,
        datasets: [
            {
                label: "No Wages",
                backgroundColor: "#E9ED74",
                data: [7422,8020,16336]
            },
            {
                label: "With Wages",
                backgroundColor: "#47C69A",
                data: [22178,22505,88568]
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
            data: config,
            options: options
		});
	});
</script>
<canvas bind:this={chartCanvas} id="myChart" class="py-4 px-4 2xl:mx-24"></canvas>