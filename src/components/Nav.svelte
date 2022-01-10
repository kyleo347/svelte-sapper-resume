<script lang="ts">
  import TopAppBar, {
    Row,
    Section,
    Title,
    AutoAdjust,
    TopAppBarComponentDev,
  } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import SideNav from "./SideNav.svelte";
  import { drawerOpen } from "../store";
  let topAppBar: TopAppBarComponentDev;
</script>

<TopAppBar bind:this={topAppBar} variant="fixed">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={drawerOpen.toggle}
        >menu</IconButton
      >
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download" href="."
        >home</IconButton
      >
      <IconButton
        class="material-icons"
        aria-label="Print this page"
        href="about">info</IconButton
      >
      <IconButton
        class="material-icons"
        aria-label="Bookmark this page"
        href="contact">person</IconButton
      >
      <IconButton
        class="material-icons"
        aria-label="Bookmark this page"
        href="projects">toc</IconButton
      >
    </Section>
  </Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
  <SideNav />
</AutoAdjust>

<style>
  /* Hide everything above this component. */
  :global(app),
  :global(body),
  :global(html) {
    display: block !important;
    height: auto !important;
    width: auto !important;
    position: static !important;
  }
</style>
