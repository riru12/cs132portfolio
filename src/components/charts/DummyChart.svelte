<script>
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
    
	let chartData = [20, 100, 50, 12, 20, 130, 45];
	let Labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
	let chartCanvas;

    let config = {
        datasets: [
            {
                label: 'High Impact',
                data: [{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}, {x: 0.5, y: 5.5}],
                backgroundColor: 'rgb(255, 99, 132)'
            },
            {
                label: 'Medium Impact',
                data: [{x: -12, y: 5}, {x: 5, y: 7}, {x: 7, y: 2}, {x: 1.5, y: 3.5}],
                backgroundColor: 'rgb(55, 55, 132)'
            },
        ]
    };

	onMount(async () => {
		let ctx = chartCanvas.getContext('2d');
		new Chart(ctx, {
			type: 'scatter',
            data: config,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    }
                }
             }
		});
	});
</script>
<canvas bind:this={chartCanvas} id="myChart" class="py-4 mx-24"></canvas>