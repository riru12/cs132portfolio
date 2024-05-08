<script lang="ts">
    import OverviewIcon from "./icons/navbar/OverviewIcon.svelte";
    import BackgroundIcon from "./icons/navbar/BackgroundIcon.svelte";
    import DataIcon from "./icons/navbar/DataIcon.svelte";
    import MethodIcon from "./icons/navbar/MethodIcon.svelte";
    import ResultsIcon from "./icons/navbar/ResultsIcon.svelte";

    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    onMount(() => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                // @ts-ignore
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
</script>

<div class="flex fixed bottom-4 md:bottom-auto md:top-4 left-2/4 translate-x-[-50%] px-4 w-screen md:w-auto z-50">
    <nav class="flex rounded-2xl bg-[#2d2d2d99] text-neutral-300 font-semibold backdrop-blur-lg border-[1px] border-neutral-700 flex-1 md:w-min p-1">
        <a href="#bento" class="flex gap-1 justify-center items-center px-1 py-4 sm:px-4 hover:bg-[#a3a3a336] rounded-xl grow text-center flex-col sm:flex-row"><OverviewIcon/><div class="text-[0.7rem] sm:text-[0.9rem]">Overview</div></a>
        <a href="#background" class="flex gap-1 justify-center items-center px-1 py-4 sm:px-4 hover:bg-[#a3a3a336] rounded-xl grow text-center flex-col sm:flex-row"><BackgroundIcon/><div class="text-[0.7rem] sm:text-[0.9rem]">Background</div></a>
        <a href="#data" class="flex gap-1 justify-center items-center px-1 py-4 sm:px-4 hover:bg-[#a3a3a336] rounded-xl grow text-center flex-col sm:flex-row"><DataIcon/><div class="text-[0.7rem] sm:text-[0.9rem]">Data</div></a>
        <a href="#method" class="flex gap-1 justify-center items-center px-1 py-4 sm:px-4 hover:bg-[#a3a3a336] rounded-xl grow text-center flex-col sm:flex-row"><MethodIcon/><div class="text-[0.7rem] sm:text-[0.9rem]">Method</div></a>
        <a href="{base}/" class="flex gap-1 justify-center items-center px-1 py-4 sm:px-4 hover:bg-[#a3a3a336] rounded-xl grow text-center flex-col sm:flex-row"><ResultsIcon/><div class="text-[0.7rem] sm:text-[0.9rem]">Results</div></a>
    </nav>
</div>