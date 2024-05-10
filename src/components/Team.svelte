<script lang="ts">
    import MailIcon from "./assets/team/MailIcon.svelte";
    import GithubIcon from "./assets/team/GithubIcon.svelte";
    import PortfolioIcon from "./assets/team/PortfolioIcon.svelte";
    import LinkedinIcon from "./assets/team/LinkedinIcon.svelte";

    import team from "./assets/team/content.json";
</script>

<section id="team" class="mx-12 md:mx-32 lg:mx-64 py-16 min-h-auto min-h-screen justify-center items-center flex flex-col sm:snap-always sm:snap-start">
    <div class="flex flex-row mb-10 justify-center">
        <div class="text-white text-3xl font-bold">
            Meet the Team
        </div>
    </div>
    <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 max-w-xl 2xl:max-w-max">
        {#each team as member}
            <div id={member.id.toString()} class="text-white text-xl font-bold flex flex-col items-center justify-center bg-[#141414] rounded-3xl p-8 gap-6">
                {#if member.pic}
                    <div class="bg-transparent w-20 h-20 ">
                        <img src={member.pic} alt="" class="min-h-full md:min-w-full object-cover rounded-[50%]">
                    </div>
                {/if}
                <div class="flex flex-col gap-5 items-center">
                    <div class="flex flex-col items-center">
                        <p>{member.name}</p>
                        {#if member.email}
                            <div class="flex justify-center items-center gap-1">
                                <MailIcon/>
                                <a href="mailto:{member.email}" class="text-sm font-mono font-normal gray-text hover:underline">{member.email}</a>
                            </div>
                        {/if}
                    </div>
                    {#if member.description}<p class="text-base font-normal gray-text text-center">{member.description}</p>{/if}
                    {#if member.description2}<p class="text-base font-normal gray-text text-center">{member.description2}</p>{/if}
                </div>
                <div class="flex flex-row gap-4">
                    {#if member.gitlink}
                        <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                            <a href={member.gitlink} target="_blank" class="absolute left-1/2 translate-x-[-52%] top-1/2 translate-y-[-50%]">
                                <GithubIcon/>
                            </a>
                        </div>
                    {/if}
                    {#if member.portfoliolink}
                        <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                            <a href={member.portfoliolink} target="_blank" class="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                                <PortfolioIcon/>
                            </a>
                        </div>
                    {/if}
                    {#if member.linkedinlink}
                        <div class="w-12 h-12 rounded-[50%] relative hover:bg-black">
                            <a href={member.linkedinlink} target="_blank" class="absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%]">
                                <LinkedinIcon/>
                            </a>
                        </div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</section>