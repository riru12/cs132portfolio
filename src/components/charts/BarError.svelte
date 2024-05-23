<script>
	import { BarWithErrorBarsChart } from 'chartjs-chart-error-bars';
	import { onMount } from 'svelte';
    
	let chartData = [20, 100, 50, 12, 20, 130, 45];
	let Labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
	let chartCanvas;

    let config = {
      labels: Labels,
      datasets: [
        {
            label: 'RFE Feature Importance Score',
            data: [
                {
                    y: 4,
                    yMin: 1,
                    yMax: 6,
                },
                {
                    y: 2,
                    yMin: 1,
                    yMax: 4,
                },
                {
                    y: 4,
                    yMin: 1,
                    yMax: 6,
                },
                {
                    y: 2,
                    yMin: 1,
                    yMax: 4,
                },
                {
                    y: 4,
                    yMin: 1,
                    yMax: 6,
                },
                {
                    y: 2,
                    yMin: 1,
                    yMax: 4,
                },
                {
                    y: 4,
                    yMin: 1,
                    yMax: 6,
                },
            ],
            backgroundColor: 'rgb(255, 99, 132)'
        },
      ]
    };

	onMount(async () => {
		let ctx = chartCanvas.getContext('2d');
		new BarWithErrorBarsChart(ctx, {
            data: config
		});
	});
</script>
<canvas bind:this={chartCanvas} id="myChart" class="py-4 mx-24"></canvas>