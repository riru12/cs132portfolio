<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Overview from "../components/Overview.svelte";
    import Overviewcopy from "../components/Overview copy.svelte";
</script>

<slot />
<div class="snap-y snap-normal overflow-y-scroll h-screen flex-grow z-0">
  <Navbar/>
  <Hero />
  <Overview />
  <Overviewcopy />
</div>
