const express = require("express");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.get("/", getTodos);
router.post("/", createTodo);
// Complete the route for 3rd api controller
router.put("/:id",updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
