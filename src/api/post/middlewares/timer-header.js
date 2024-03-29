module.exports = () => {
  return async (ctx, next) => {
    const start = Date.now();

    await next();

    const delta = Math.ceil(Date.now() - start);
    ctx.set("X-Response-Timee", delta + "ms");
    console.log("is-in middleware");
  };
};
