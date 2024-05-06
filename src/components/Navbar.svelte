<script lang="ts">
    import { base } from '$app/paths';
</script>

<div class="flex fixed bottom-4 md:bottom-auto md:top-4 left-2/4 translate-x-[-50%] px-4 w-screen md:w-auto">
    <nav class="flex rounded-2xl bg-[#2d2d2d99] text-neutral-300 font-semibold backdrop-blur-lg border-[1px] border-neutral-700 w-screen md:w-min p-1">
        <a href="{base}/" class="p-4 hover:bg-[#a3a3a336] rounded-xl grow text-center">Home</a>
        <a href="{base}/" class="p-4 hover:bg-[#a3a3a336] rounded-xl grow text-center">Background</a>
        <a href="{base}/" class="p-4 hover:bg-[#a3a3a336] rounded-xl grow text-center">Data</a>
        <a href="{base}/" class="p-4 hover:bg-[#a3a3a336] rounded-xl grow text-center">Methodology</a>
        <a href="{base}/" class="p-4 hover:bg-[#a3a3a336] rounded-xl grow text-center">Results</a>
    </nav>
</div>