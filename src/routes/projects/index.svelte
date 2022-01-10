<script context="module" lang="ts">
  import { preloadProjects } from "./_api";

  export function preload() {
    return preloadProjects(this.fetch);
  }
</script>

<script lang="ts">
  import type { Project } from "../../models/projects";

  export let projects: Project[];
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent projects</h1>

<ul>
  {#each projects as project}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li><a rel="prefetch" href="blog/{project.slug}">{project.title}</a></li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>
