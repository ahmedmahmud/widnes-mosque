import { c as create_ssr_component } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="container h-full mx-auto flex justify-center items-center place-content-center"><div class="space-y-10 text-center"><form action="?/login" method="POST" class="card variant-ghost m-4"><section class="p-4 md:p-10"><h1 class="font-bold">Login</h1>
        <input id="username" name="username" type="text" class="input mt-10" placeholder="Username" required>
        <input id="password" name="password" type="password" class="input mt-4" placeholder="Password" required>
        <button type="submit" class="btn variant-soft mt-4 w-full">Submit</button></section>

      ${form?.credentials || form?.invalid ? `<aside class="alert variant-ghost-error"><div class="alert-message font-bold">${form?.invalid ? `<p class="error">Username and password is required.</p>` : ``}

            ${form?.credentials ? `<p class="error">You have entered the wrong credentials.</p>` : ``}</div></aside>` : ``}</form></div></div>`;
});
export {
  Page as default
};
