"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [createBlog, setCreateBlog] = useState({});
  const [searchBlog, setSearchBlog] = useState({ title: "" });
  const [updateBlog, setUpdateBlog] = useState({});
  const [deleteBlog, setDeleteBlog] = useState({});

  // create a blog
  const createNewBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: createBlog.title, body: createBlog.body }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // update a blog
  const updateExistingBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs/:id", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: updateBlog.title, body: updateBlog.body }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // delete a blog
  const deleteExistingBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs/:id", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: deleteBlog.title }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // get a blog by its id
  const searchExistingBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs/:id", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: searchBlog.title }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* show all blogs */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">Blogs</h1>
        <div className="flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex flex-col items-center justify-center p-4 m-4 border border-gray-200 rounded-lg hover:bg-slate-50">
              <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
              <h2 className="text-2xl font-bold mb-4">ID - {blog.id}</h2>
              <p className="text-lg">{blog.body}</p>
            </div>
          ))}
        </div>
      </div>
      {/* get a blog by its id, add search bar and box to show results */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">Blog Search</h1>
        <input
          className="border border-gray-200 rounded-lg p-4 m-4"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            const title = String(e.target.value).toLowerCase();
            setSearchBlog({ ...searchBlog, title: title });
          }}
        />

        <div className="flex flex-wrap justify-center">
          {blogs
            .filter((blog) => blog.title.toLowerCase() === searchBlog.title)
            .map((blog) => (
              <div key={blog.id} className="flex flex-col items-center justify-center p-4 m-4 border border-gray-200 rounded-lg hover:bg-slate-50">
                <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
                <p className="text-lg">{blog.body}</p>
              </div>
            ))}
        </div>
      </div>
      {/* create a blog */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">Create Blog</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            createNewBlog(e);
          }}
        >
          <input
            onChange={(e) => {
              const title = String(e.target.value).toLowerCase();
              setCreateBlog({ ...createBlog, title: title });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => {
              const body = String(e.target.value).toLowerCase();
              setCreateBlog({ ...createBlog, body: body });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Body"
          />
          <button className="border border-gray-200 rounded-lg p-4 m-4">Submit</button>
        </form>
      </div>
      {/* update a blog */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">Update Blog</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            updateExistingBlog(e);
          }}
        >
          <input
            onChange={(e) => {
              const id = String(e.target.value).toLowerCase();
              setUpdateBlog({ ...updateBlog, id: id });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Id"
          />
          <input
            onChange={(e) => {
              const title = String(e.target.value).toLowerCase();
              setUpdateBlog({ ...updateBlog, title: title });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(e) => {
              const body = String(e.target.value).toLowerCase();
              setUpdateBlog({ ...updateBlog, body: body });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Body"
          />
          <button className="border border-gray-200 rounded-lg p-4 m-4">Submit</button>
        </form>
      </div>
      {/* delete a blog */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-8">Delete Blog</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            deleteExistingBlog(e);
          }}
        >
          <input
            onChange={(e) => {
              const title = String(e.target.value).toLowerCase();
              setDeleteBlog({ ...deleteBlog, title: title });
            }}
            className="border border-gray-200 rounded-lg p-4 m-4"
            type="text"
            placeholder="Title"
          />
          <button className="border border-gray-200 rounded-lg p-4 m-4">Submit</button>
        </form>
      </div>
    </main>
  );
}
