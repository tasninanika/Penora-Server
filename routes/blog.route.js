// blog.routes.js
import express from "express";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getOwnBlogs,
  getPublishedBlog,
  likeBlog,
  dislikeBlog,
  togglePublishBlog,
  getMyTotalBlogLikes,
} from "../controllers/blog.controller.js";

const router = express.Router();

// existing routes
router.route("/").post(isAuthenticated, createBlog);
router.route("/:blogId").put(isAuthenticated, updateBlog);
router.route("/:blogId").patch(togglePublishBlog);
router.route("/get-all-blogs").get(getAllBlogs);
router.route("/get-published-blogs").get(getPublishedBlog);
router.route("/get-own-blogs").get(isAuthenticated, getOwnBlogs);
router.route("/delete/:id").delete(isAuthenticated, deleteBlog);
router.get("/:id/like", isAuthenticated, likeBlog);
router.get("/:id/dislike", isAuthenticated, dislikeBlog);
router.get("/my-blogs/likes", isAuthenticated, getMyTotalBlogLikes);

export default router;
