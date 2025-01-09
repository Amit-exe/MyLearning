import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const WorkoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUT":
      return {
        workout: action.payload,
      };
    case "CREATE_WORKOUT":
      //   console.log("hol");

      return {
        workout: [action.payload, ...state.workout],
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkoutReducer, () => {
    workout: null;
  });

  return (
    <>
      <WorkoutContext.Provider value={{ ...state, dispatch }}>
        {children}
      </WorkoutContext.Provider>
    </>
  );
};
