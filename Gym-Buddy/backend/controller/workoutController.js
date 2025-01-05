const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");
// get all workout
const getAllWorkout = async (req, res) => {
  try {
    const workout = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get single workout
const getSingleWorkout = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "No such workout" });
  try {
    const workout = await Workout.find({ _id: id });
    console.log(workout);

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: "No such workout" });
  }
};
// add a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "No such workout" });
  try {
    const workout = await Workout.findOneAndDelete({ _id: id });
    return res.status(200).json(workout);
  } catch (error) {
    return res.status(400).json({ message: "No such workout" });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: "No such workout" });

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!workout) return res.status(400).json({ message: "No such Workout" });

  res.status(200).json({ message: "updated success fully " });
};

module.exports = {
  createWorkout,
  getSingleWorkout,
  getAllWorkout,
  deleteWorkout,
  updateWorkout,
};
