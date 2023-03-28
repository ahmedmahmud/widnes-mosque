<script lang="ts">
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<div class="container h-full mx-auto flex justify-center items-center place-content-center">
  <div class="space-y-10 text-center">
    <form action="?/login" method="POST" class="card variant-ghost m-4">
      <section class="p-4 md:p-10">
        <h1 class="font-bold">Login</h1>
        <input
          id="username"
          name="username"
          type="text"
          class="input mt-10"
          placeholder="Username"
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          class="input mt-4"
          placeholder="Password"
          required
        />
        <button type="submit" class="btn variant-soft mt-4 w-full">Submit</button>
      </section>

      {#if form?.credentials || form?.invalid}
        <aside class="alert variant-ghost-error">
          <div class="alert-message font-bold">
            {#if form?.invalid}
              <p class="error">Username and password is required.</p>
            {/if}

            {#if form?.credentials}
              <p class="error">You have entered the wrong credentials.</p>
            {/if}
          </div>
        </aside>
      {/if}
    </form>
  </div>
</div>
