const express = require("express");
const router = express.Router();

const { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } = require("../controllers/blog.controller");
const blogController = { createBlog, deleteBlog, getBlog, getBlogs, updateBlog };

// get all blogs

router
  .get("/blogs", blogController.getBlogs)
  .get("/blogs/:id", blogController.getBlog)
  .post("/blogs", blogController.createBlog)
  .patch("/blogs/:id", blogController.updateBlog)
  .delete("/blogs/:id", blogController.deleteBlog);
module.exports = router;
