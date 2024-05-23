<script>
	import { BarWithErrorBarsChart } from 'chartjs-chart-error-bars';
	import { onMount } from 'svelte';
    
	let Labels = ['NFOOD', 'HOUSING_WATER', 'BREAD', 'MEAT', 'HEALTH', 'TRANSPORT', 'MISCELLANEOUS', 'VEG', 'SUGAR', 'FURNISHING'];
	let chartCanvas;

    let config = {
      labels: Labels,
      datasets: [
        {
            label: 'RFE Feature Importance Score',
            data: [
                {
                    y: 0.108420,
                    yMin: 0.10009505,
                    yMax: 0.11674495,
                },
                {
                    y: 0.105144,
                    yMin: 0.09790631,
                    yMax: 0.11238169,
                },
                {
                    y: 0.101487,
                    yMin: 0.09597465,
                    yMax: 0.10699935,
                },
                {
                    y: 0.099369,
                    yMin: 0.09291254,
                    yMax: 0.10582546,
                },
                {
                    y: 0.098867,
                    yMin: 0.09310979,
                    yMax: 0.10462421,
                },
                {
                    y: 0.098350,
                    yMin: 0.09266503,
                    yMax: 0.10403497,
                },
                {
                    y: 0.098074,
                    yMin: 0.09270537,
                    yMax: 0.10344263,
                },
                {
                    y: 0.097430,
                    yMin: 0.0918136,
                    yMax: 0.1030464,
                },
                {
                    y: 0.096811,
                    yMin: 0.09167778,
                    yMax: 0.10194422,
                },
                {
                    y: 0.096048,
                    yMin: 0.09086223,
                    yMax: 0.10123377,
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
<canvas bind:this={chartCanvas} id="myChart" class="py-4 px-4 2xl:mx-24"></canvas>