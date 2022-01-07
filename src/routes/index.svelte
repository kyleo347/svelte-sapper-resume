<script>
  import profilePic from "images/hammahamma.jpg";
  import Card from "@smui/card";
</script>

<svelte:head>
  <title>Kyle O'Connor</title>
</svelte:head>
<div>
  <Card variant="outlined" padded style="display:flex;flex-direction:row">
    <img alt="Kyle" src={profilePic} />
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
</div>

<style>
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    float: left;
    margin: 0 1rem;
  }
  .card {
    display: flex;
    flex-direction: row;
  }
</style>
