import { useEffect } from "react";
import WorkoutComp from "../components/Workoutcomp";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
const Home = () => {
  const { workout, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workout");

      // const text = await response.text(); // Get the raw response as text
      // console.log("Raw response text:", text);
      const json = await response.json();

      if (response.ok) {
        console.log(response.body);

        dispatch({ type: "SET_WORKOUT", payload: json });
      }
    };
    fetchWorkout();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workout &&
          workout.map((workout) => {
            // <p>{workout.title}</p
            <WorkoutComp key={workout._id} workout={workout} />;
          })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
