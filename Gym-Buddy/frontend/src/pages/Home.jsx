import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkout] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workout");
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
          workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
