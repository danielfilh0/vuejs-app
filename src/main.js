import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import LoginLayout from "./components/layouts/EmptyLayout.vue";
import store from "./store";

const app = createApp(App);

app.component("default-layout", DefaultLayout);
app.component("login-layout", LoginLayout);

app.use(router);
app.use(store);

app.mount("#app");
