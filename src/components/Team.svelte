<script lang="ts">
    import GithubIcon from "./icons/team/GithubIcon.svelte";
    import PortfolioIcon from "./icons/team/PortfolioIcon.svelte";
    import LinkedinIcon from "./icons/team/LinkedinIcon.svelte";
</script>

<section id="team" class="mx-12 md:mx-32 lg:mx-64 py-16 min-h-auto min-h-screen justify-center items-center flex flex-col sm:snap-always sm:snap-start">
    <div class="flex flex-row gap-2 mb-10 justify-center">
        <div class="text-white text-3xl font-bold">
            Meet the Team
        </div>
    </div>
    <div class="grid grid-cols-1 2xl:grid-cols-3 gap-4 max-w-xl 2xl:max-w-max">
        <div class="text-white text-xl font-bold flex flex-col items-center justify-center bg-[#232323] rounded-3xl p-8 gap-6">
            <div class="bg-white w-20 h-20 rounded-[50%]"></div>
            <div class="flex flex-col gap-2 items-center">
                <p>Brill Riña</p>
                <p class="text-base font-normal gray-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div class="flex flex-row gap-4">
                <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                    <a href="https://github.com/riru12" target="_blank" class="absolute left-1/2 translate-x-[-52%] top-1/2 translate-y-[-50%]">
                        <GithubIcon/>
                    </a>
                </div>
                <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                    <a href="https://riru.vercel.app/" target="_blank" class="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                        <PortfolioIcon/>
                    </a>
                </div>
                <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                    <a href="https://www.linkedin.com/in/brill-rina/" target="_blank" class="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                        <LinkedinIcon/>
                    </a>
                </div>
            </div>
        </div>
        <div class="text-white text-xl font-bold flex flex-col items-center justify-center bg-[#232323] rounded-3xl p-8 gap-6">
            <div class="bg-white w-20 h-20 rounded-[50%]"></div>
            <div class="flex flex-col gap-2 items-center">
                <p>Jeff Pecson</p>
                <p class="text-base font-normal gray-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
        <div class="text-white text-xl font-bold flex flex-col items-center justify-center bg-[#232323] rounded-3xl p-8 gap-6">
            <div class="bg-white w-20 h-20 rounded-[50%]"></div>
            <div class="flex flex-col gap-2 items-center">
                <p>Rafa Partosa</p>
                <p class="text-base font-normal gray-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </div>
</section>