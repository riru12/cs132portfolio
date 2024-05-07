<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Overview from "../components/Overview.svelte";
</script>

<slot />
<div class="snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0">
  <Navbar/>
  <Hero />
  <Overview />
</div>
