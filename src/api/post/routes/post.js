"use strict";

/**
 * post router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post.post", {
  prefix: "",
  only: ["find", "findOne", "create", "update", "delete"],
  except: [],
  config: {
    find: {
      auth: false,
      policies: ["is-admin"],
      middlewares: ["api::post.timer-header"],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
