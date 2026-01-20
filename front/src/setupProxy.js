const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://127.0.0.1:3037",
      changeOrigin: true,
      // When mounted at /api, CRA forwards /v1/... . Put /api back.
      pathRewrite: (path) => "/api" + path,
    })
  );
};
