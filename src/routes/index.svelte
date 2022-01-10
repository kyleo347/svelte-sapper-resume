<script context="module" lang="ts">
  import { preloadProjects } from "./projects/_api";

  export function preload() {
    return preloadProjects(this.fetch);
  }
</script>

<script lang="ts">
  import Card, {
    PrimaryAction,
    Media,
    Content,
    ActionButtons,
    Actions,
  } from "@smui/card";
  import Button, { Label } from "@smui/button";
  import LayoutGrid, { Cell } from "@smui/layout-grid";
  import type { Project } from "../models/projects";

  export let projects: Project[];
</script>

<svelte:head>
  <title>Kyle O'Connor</title>
</svelte:head>
<div>
  <Card variant="outlined" padded style="display:flex;flex-direction:row">
    <img alt="Kyle" src="hammahamma.jpg" />
    <div>
      <h2>Kyle O'Connor</h2>
      <p>Fullstack Developer</p>
    </div>
  </Card>
  <Card variant="outlined" padded style="display:flex;flex-direction:row">
    <div>
      <h2>Skills</h2>
    </div>
  </Card>
  <Card variant="outlined" padded>
    <h2>Projects</h2>
    <LayoutGrid>
      {#each projects as project}
        <Cell>
          <div class="card-container">
            <Card>
              <PrimaryAction on:click={() => null}>
                <Media class="card-media-16x9" aspectRatio="16x9" />
                <Content class="mdc-typography--body2">
                  <h2 class="mdc-typography--headline6" style="margin: 0;">
                    {project.title}
                  </h2>
                </Content>
              </PrimaryAction>
              <Actions>
                <ActionButtons>
                  <Button on:click={() => null}>
                    <Label>github</Label>
                  </Button>
                  <Button on:click={() => null}>
                    <Label>demo</Label>
                  </Button>
                </ActionButtons>
              </Actions>
            </Card>
          </div>
        </Cell>
      {/each}
    </LayoutGrid>
  </Card>
</div>

<style>
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
    margin: 0 1rem;
  }

  * :global(.card-media-16x9) {
    background-image: url("/hammahamma.jpg");
  }
  .card {
    display: flex;
    flex-direction: row;
  }
</style>
