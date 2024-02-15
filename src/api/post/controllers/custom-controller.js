// "use strict";
const { createCoreController } = require("@strapi/strapi").factories;
const modelId = "api::post.post";
// @ts-ignore
module.exports = createCoreController(modelId, ({ strapi }) => ({
  async index(ctx, next) {
    // called by GET /hello
    ctx.body = { "Hello World!": "nani" }; // we could also send a JSON
  },
}));
