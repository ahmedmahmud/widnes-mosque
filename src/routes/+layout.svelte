<script lang="ts">
  // Your selected Skeleton theme:
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  // This contains the bulk of Skeletons required styles:
  import '@skeletonlabs/skeleton/styles/all.css';

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import '../app.postcss';

  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>Widnes Deen Center</title>
</svelte:head>

<!-- <nav>
  {#if !$page.data.user}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
  {/if}

  {#if $page.data.user}
    <a href="/admin">Admin</a>

    <form action="/logout" method="POST">
      <button type="submit">Log out</button>
    </form>
  {/if}
</nav> -->

<main class="h-full">
  <slot />
</main>
