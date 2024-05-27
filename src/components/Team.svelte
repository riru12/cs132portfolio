<script lang="ts">
    import MailIcon from "./icons/team/MailIcon.svelte";
    import GithubIcon from "./icons/team/GithubIcon.svelte";
    import PortfolioIcon from "./icons/team/PortfolioIcon.svelte";
    import LinkedinIcon from "./icons/team/LinkedinIcon.svelte";

    import team from "$lib/content/team.json";

    import img1 from "$lib/images/team_brill.jpg";
    import img2 from "$lib/images/team_jeff.jpg";
    import img3 from "$lib/images/team_rafa.jpg";
    let imgs = [img1, img2, img3]
</script>

<section id="team" class="mx-12 md:mx-32 lg:mx-64 pt-32 pb-32 md:pb-16 min-h-auto justify-center items-center flex flex-col">
    <div class="flex flex-row mb-10 justify-center">
        <div class="text-white text-3xl font-bold">
            Meet the Team
        </div>
    </div>
    <div class="grid grid-cols-1 2xl:grid-cols-3 gap-4 max-w-xl 2xl:max-w-max">
        {#each team as member}
            <div id={member.id.toString()} class="text-white text-xl font-bold grid grid-cols-1 bg-[#141414] rounded-3xl p-8 gap-6">
                {#if member.pic===true}
                    <div class="flex w-full justify-center">
                        <div class="bg-transparent w-20 h-20">
                            <img src={imgs[member.id-1]} alt="" class="min-h-full md:min-w-full object-cover rounded-[50%]">
                        </div>
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
                <div class="flex flex-row gap-4 w-full justify-center">
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
    <a href="https://github.com/riru12/cs132portfolio" target="_blank" class="mt-5 w-fit text-center gray-text font-mono text-xs opacity-30 hover:opacity-100 hover:underline">Click here to view this website's Github repository</a>
</section>