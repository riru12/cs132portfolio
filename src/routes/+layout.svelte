<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Bento from "../components/Bento.svelte";
  import Overview from "../components/Overview.svelte";
  import Background from "../components/Background.svelte";
  import Background2 from "../components/Background-2.svelte";
  import Data from "../components/Data.svelte";
</script>

<slot />
<div class="sm:snap-y sm:snap-mandatory sm:overflow-y-scroll h-screen flex-grow z-0">
  <Navbar/>
  <Bento />
  <!-- <Overview /> -->
  <Background />
  <Background2 />
  <Data />
</div>
