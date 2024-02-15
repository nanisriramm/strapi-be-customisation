// @ts-ignore
const config = {
  locales: ["it"],
};

// @ts-ignore
import favicon from "./extensions/favicon.png";
// @ts-ignore
import logo from "./extensions/logo.png";

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config: {
    translations: {
      en: {
        "Auth.form.button.login.strapi": "Log in via Nani's world!",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in Nani's wordld!. All saved data will be stored in your database.",
        "Auth.form.welcome.subtitle": "Log in to your Nani's world account",
        "Auth.form.welcome.title": "Welcome to Nani's world!",
        "app.components.LeftMenu.navbrand.title": "Nani's world",
        "HomePage.helmet.title": "Dashboard - Nani's world Admin",
        "app.components.LeftMenu.navbrand.workplace": "Administration",
      },
    },
    head: {
      favicon: favicon,
    },
    auth: {
      logo: logo,
    },
    menu: {
      logo: favicon,
    },
    tutorials: false,
  },
  bootstrap,
};
