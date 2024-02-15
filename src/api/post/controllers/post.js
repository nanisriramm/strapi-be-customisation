const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  /**
   * Example 1: Modifying a Strapi controller functionn
   *
   * If you need to modify the input or output of a pre-defined Strapi controller method,
   * write a method of the same name, and use `super` to call the parent method.
   * */
  async find(ctx) {
    // your custom logic for modifying the input
    ctx.query = { ...ctx.query, locale: "en" }; // force ctx.query.locale to 'en' regardless of what was requested
    console.log("hii iam core controller");
    // Call the default parent controller action
    const result = await super.find(ctx);

    // your custom logic for modifying the output
    result.meta.date = Date.now().toLocaleString(); // change the date that is returned

    return result;
  },

  /**
   * Example 2: Replacing a Strapi controller function
   *
   * If you need to completely replace the behavior of a pre-defined Strapi controller method,
   * you can do so by simply implementing a method of the same name.
   *
   * Caution: You will need to manage the security of the request and results on your own,
   * as demonstrated in this example.
   * */
}));
