module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom-route",
      handler: "custom-controller.index",
    },
  ],
};
