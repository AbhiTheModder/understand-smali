<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/about.svelte";
  import NewInstance from "./routes/new-instance.svelte";
  import Days from "./routes/Days.svelte";

  let days = Array.from({ length: 7 }, (_, i) => i + 1);
  let loadComponent = (path) => () => import(`./routes/days/${path}.svelte`);
  let url = "";

  const dayTitles = {
    1: "Day 1 - Smali vs Java",
    2: "Day 2 - Basics",
    3: "Day 3 - Registers[local]",
    4: "Day 4 - Registers[param]",
    5: "Day 5 - Examples",
    6: "Day 6 - CrackMe's",
  };

  $: updateTitle();

  function updateTitle() {
    const path = window.location.pathname;

    if (path === "/about") {
      document.title = "About - Your Site Name";
    } else if (path.startsWith("/days/")) {
      const day = path.split("/").pop();
      document.title = dayTitles[day] || `Day ${day} - Understand Smali`;
    } else if (path === "/new-instance") {
      document.title = "Instructions - new-instance";
    } else if (path === "/days") {
      document.title = "Days Overview - Understand Smali";
    } else {
      document.title = "Understand Smali";
    }
  }
</script>

<Router {url}>
  <div>
    <Route path="/about" component={About} />
    <Route path="/"><Home /></Route>
    <Route path="/home"><Home /></Route>
    {#each days as day}
      <Route path={`/days/${day}`} component={loadComponent(day)} />
    {/each}
    <Route path="/new-instance" component={NewInstance} />
    <Route path="/days" component={Days} />
    <Route path="*"><h1>Not found</h1></Route>
  </div>
</Router>
