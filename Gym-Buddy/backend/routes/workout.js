const express = require("express");
const {
  createWorkout,
  getSingleWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workoutController");
const router = express.Router();

router.get("/", getAllWorkout);

router.get("/:id", getSingleWorkout);

router.post("/", createWorkout);

router.patch("/:id", updateWorkout);

router.delete("/:id", deleteWorkout);

module.exports = router;
