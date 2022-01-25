const express = require("express");
const httpProxy = require("http-proxy");
const cors = require("cors");

const app = express();
const proxy = httpProxy.createProxyServer({});

const port = process.env.PORT || 3001;

// enable CORS
app.use(cors());

app.get("*", function (req, res) {
  console.log("Request", req.method, req.url);
  proxy.web(req, res, { target: `${req.protocol}://${req.headers.proxyto}` });
});

// console text when app is running
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
