import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="container h-full mx-auto flex justify-center items-center place-content-center"><div class="space-y-10 text-center"><h1 class="font-bold">Edit Prayer Times</h1>

    <aside class="alert variant-ghost">
      <div class="alert-message font-bold"><p>Maghrib is filled automatically</p></div></aside>

    <form action="?/change_time" method="POST" class="card variant-ghost"><section class="pl-4 pr-10 py-10"><div class="grid grid-cols-3 gap-4"><h4>Fajr</h4>
          <input name="fajr"${add_attribute("value", $page.data.fajr, 0)} class="input col-span-2" type="time" required>

          <h4>Dhur</h4>
          <input name="dhur"${add_attribute("value", $page.data.dhur, 0)} class="input col-span-2" type="time" required>

          <h4>Asr</h4>
          <input name="asr"${add_attribute("value", $page.data.asr, 0)} class="input col-span-2" type="time" required>

          <h4>Isha</h4>
          <input name="isha"${add_attribute("value", $page.data.isha, 0)} class="input col-span-2" type="time" required></div></section>
      <button type="submit" class="btn variant-soft w-full rounded-md">Submit</button></form>

    <a data-sveltekit-reload href="/" class="btn variant-soft">Home</a>

    <form action="/logout" method="POST"><button type="submit" class="btn variant-soft">Logout</button></form></div></div>`;
});
export {
  Page as default
};
