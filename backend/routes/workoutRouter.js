const express = require("express");
const router = express.Router();
const IsloggedIn = require("../middlewares/IsloggedIn");
const workoutModel = require("../models/workout_model")

router.get("/", IsloggedIn, async (req, res) => {
  try {
    const workouts = await workoutModel.find({ user: req.user.id }).sort({ date: -1 });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST create a new workout
router.post("/add-workout", IsloggedIn, async (req, res) => {
  try {
    const newWorkout = await workoutModel.create({ ...req.body, user: req.user.id });
    if (!newWorkout) {
      return res.status(400).json({ error: "Failed to create workout" });
    }
    res.status(201).json(newWorkout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update a workout
router.put("/update-workout/:id", IsloggedIn, async (req, res) => {
  try {
    const updated = await workoutModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Workout not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE a workout
router.delete("/:id", IsloggedIn, async (req, res) => {
  try {
    const deleted = await workoutModel.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ error: "Workout not found" });
    res.json({ message: "Workout deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;