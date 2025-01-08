import { useEffect, useState } from "react";
import WorkoutComp from "../components/Workoutcomp";

const Home = () => {
  const [workouts, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workout");
      console.log(response);
      // const text = await response.text(); // Get the raw response as text
      // console.log("Raw response text:", text);
      const json = await response.json();
      console.log("hhh");

      if (response.ok) {
        setWorkout(json);
      }
    };
    fetchWorkout();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            // <p>{workout.title}</p>
            <WorkoutComp key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
};

export default Home;
