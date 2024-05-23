<script>
	import { BarWithErrorBarsChart } from 'chartjs-chart-error-bars';
	import { onMount } from 'svelte';
    
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
            backgroundColor: '#47C69A',
            errorBarColor: '#ffffff',
            errorBarWhiskerColor: '#ffffff'
        },
      ]
    };

    let options = {
        scales: {
            x: {
                grid: {
                    color: '#2e2e2e'
                }
            },
            y: {
                grid: {
                    color: '#2e2e2e'
                }
            }
        }
    };

	onMount(async () => {
		let ctx = chartCanvas.getContext('2d');
		new BarWithErrorBarsChart(ctx, {
            data: config,
            options: options,
		});
	});
</script>
<canvas bind:this={chartCanvas} id="myChart" class="py-4 px-4 mx-24 rounded-lg"></canvas>