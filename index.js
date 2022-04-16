import routes from "./routes.js";
import Router from "./router.js";

const router = new Router(routes);

const home = document.getElementById("home");
const contact = document.getElementById("contact");
const about = document.getElementById("about");

home.addEventListener("click", () => router.loadRoute("home"));
contact.addEventListener("click", () => router.loadRoute("contact"));
about.addEventListener("click", () => router.loadRoute("about"));
