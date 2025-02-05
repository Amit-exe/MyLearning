import React, { useCallback, useEffect, useState } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("");

  const getJoke = useCallback(async () => {
    try {
      let response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
      if (response.ok) {
        const jk = await response.json();
        return jk.joke;
      } else {
        return "something went wrong try again later";
      }
    } catch (error) {
      return "you need a joke your connection is joke hehe";
    }
  }, []);

  useEffect(() => {
    getJoke().then(setJoke);
  }, [getJoke]);

  const nextJoke = async () => {
    let jokey = await getJoke();
    setJoke(jokey);

    console.log(jokey);
  };
  return (
    <div className="m-8">
      <p className="py-8 text-2xl">{joke}</p>
      <button
        className="py-2 px-5 bg-emerald-500 rounded text-white text-2xl active:bg-emerald-800 active:scale-125"
        onClick={nextJoke}
      >
        joke
      </button>
    </div>
  );
}

export default JokeFetcher;
