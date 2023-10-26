// blog controller
/*
get all blogs

router.get('/', blogController.getBlogs);

get single blog

router.get('/:id', blogController.getBlog);

create blog

router.post('/', blogController.createBlog);

update blog

router.patch('/:id', blogController.updateBlog);

delete blog

router.delete('/:id', blogController.deleteBlog);
*/

// Path: server/controllers/blog.controller.js
// blog controller

// const Blog = require("../models/blogs.model");

// get all blogs

// temporary static data
const Blogs = [
  {
    id: 1,
    title: "Blog 1",
    body: "This is blog 1",
  },
  {
    id: 2,
    title: "Blog 2",
    body: "This is blog 2",
  },
  {
    id: 3,
    title: "Blog 3",
    body: "This is blog 3",
  },
  {
    id: 4,
    title: "Blog 4",
    body: "This is blog 4",
  },
  {
    id: 5,
    title: "Blog 5",
    body: "This is blog 5",
  },
];

exports.getBlogs = async (req, res) => {
  try {
    const blogs = { blogs: Blogs }; //await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get single blog

exports.getBlog = async (req, res) => {
  try {
    // const blog = await Blog.findById(req.params.id);
    const blog = Blogs.find((blog) => blog.id === parseInt(req.params.id));
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create blog

exports.createBlog = async (req, res) => {
  const blog = req.body;
  //   const newBlog = new Blog(blog);
  const newBlog = {};
  newBlog.id = Blogs.length + 1;
  newBlog.title = blog.title;
  newBlog.body = blog.body;
  try {
    // await newBlog.save();
    Blogs.push(newBlog);
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// update blog

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const blog = req.body;
  //   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
  //   const updatedBlog = await Blog.findByIdAndUpdate(id, { ...blog, id }, { new: true });
  const updatedBlog = {};
  updatedBlog.id = id;
  updatedBlog.title = blog.title;
  updatedBlog.body = blog.body;
  Blogs.forEach((blog) => {
    if (blog.id === parseInt(id)) {
      blog.title = updatedBlog.title;
      blog.body = updatedBlog.body;
    }
  });
  try {
    // await updatedBlog.save();
    res.json(updatedBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// delete blog

exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  //   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
  // delete blog from database
  //   await Blog.findByIdAndRemove(id);
  Blogs.forEach((blog, index) => {
    if (blog.id === parseInt(id)) {
      Blogs.splice(index, 1);
    }
  });

  res.json({ message: "Blog deleted successfully." });
};
