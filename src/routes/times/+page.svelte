<script type="ts">
  import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center place-content-center">
  <div class="space-y-10 text-center">
    <h1 class="font-bold">Edit Prayer Times</h1>

    <aside class="alert variant-ghost">
      <!-- <div class="font-sans">ℹ️</div> -->
      <div class="alert-message font-bold">
        <p>Maghrib is filled automatically</p>
      </div>
    </aside>

    <form action="?/change_time" method="POST" class="card variant-ghost">
      <section class="pl-4 pr-10 py-10">
        <div class="grid grid-cols-3 gap-4">
          <h4>Fajr</h4>
          <input
            name="fajr"
            value={$page.data.fajr}
            class="input col-span-2"
            type="time"
            required
          />

          <h4>Dhur</h4>
          <input
            name="dhur"
            value={$page.data.dhur}
            class="input col-span-2"
            type="time"
            required
          />

          <h4>Asr</h4>
          <input name="asr" value={$page.data.asr} class="input col-span-2" type="time" required />

          <h4>Isha</h4>
          <input
            name="isha"
            value={$page.data.isha}
            class="input col-span-2"
            type="time"
            required
          />
        </div>
      </section>
      <button type="submit" class="btn variant-soft w-full rounded-md">Submit</button>
    </form>

    <a data-sveltekit-reload href="/" class="btn variant-soft">Home</a>

    <form action="/logout" method="POST">
      <button type="submit" class="btn variant-soft">Logout</button>
    </form>
  </div>
</div>
