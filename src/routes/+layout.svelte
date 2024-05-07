<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Overview from "../components/Overview.svelte";
  import Background from "../components/Background.svelte";
</script>

<slot />
<div class="sm:snap-y sm:snap-mandatory sm:overflow-y-scroll h-screen flex-grow z-0">
  <Navbar/>
  <Hero />
  <Overview />
  <Background />
</div>
