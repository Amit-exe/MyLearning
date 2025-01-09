import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Workout = { title, reps, load };
    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(Workout),
      headers: {
        "Content-type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setLoad("");
      setReps("");
      setTitle("");
      setError(null);
      console.log("workout added ");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="create">
        <h3>Add a New Workout</h3>
        <label>Excercise Title:</label>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <label>Reps:</label>
        <input
          type="number"
          onChange={(e) => {
            setReps(e.target.value);
          }}
          value={reps}
        />

        <label>Load (in kg):</label>
        <input
          type="number"
          onChange={(e) => {
            setLoad(e.target.value);
          }}
          value={load}
        />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default WorkoutForm;
