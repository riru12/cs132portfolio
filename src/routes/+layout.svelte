<script>
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import Bento from "../components/Bento.svelte";
  import Background from "../components/Background.svelte";
  import Background2 from "../components/Background-2.svelte";
  import Data from "../components/Data.svelte";
  import Method from "../components/Method.svelte";
  import Team from "../components/Team.svelte";
  // import Test from "../components/Test.svelte"
</script>

<slot />
<div class="">
  <!-- <Test /> -->
  <Navbar/>
  <Bento />
  <Background />
  <Background2 />
  <Data />
  <Method />
  <Team />
</div>
