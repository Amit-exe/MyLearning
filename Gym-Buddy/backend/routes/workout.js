// const express = require("express");
// const {
//   createWorkout,
//   getSingleWorkout,
//   getAllWorkout,
//   deleteWorkout,
//   updateWorkout,
// } = require("../controller/workoutController");
// const router = express.Router();

// router.get("/", getAllWorkout);

// router.get("/:id", getSingleWorkout);

// router.post("/", createWorkout);

// router.patch("/:id", updateWorkout);

// router.delete("/:id", deleteWorkout);

// module.exports = router;

const express = require("express");
const ctrlw = require("../controller/workoutController");
const router = express.Router();

router.route("/").get(ctrlw.getAllWorkout).post(ctrlw.createWorkout);

router
  .route("/:id")
  .get(ctrlw.getSingleWorkout)
  .patch(ctrlw.updateWorkout)
  .delete(ctrlw.deleteWorkout);

module.exports = router;
