// Nextjs Custom Sever

const express = require("express");
// const mongoose = require("mongoose");
// const connectDb = require("./server/utils/connectDb");
const next = require("next");
const apiRoutes = require("./server/routes/blog.route");


// connectDb();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

// async function authMiddleware(req, res, next) {
//   const token = req.headers.authorization.split(" ")[1];
//   if (!token) {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (error) {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
// }

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(
    "/api",
    //   authMiddleware, // uncomment this line to enable auth middleware, incomplete
    apiRoutes
  );

  //   server.get("/p/:id", (req, res) => {
  //     const actualPage = "/post";
  //     const queryParams = { id: req.params.id };
  //     app.render(req, res, actualPage, queryParams);
  //   });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
