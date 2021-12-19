import React, { createContext, useContext, useEffect, useState } from "react";
import { useReducerWithMiddleware } from "../hooks";
import Reducer from "./reducer";

const baseUrl = import.meta.env.VITE_API_BASEURL;

const ReadersContext = createContext();

const initialState = { readers: [] };

const Provider = props => {
  // Function to be called at each action to update the server optimistically
  function updateServerMiddleware(state, action) {
    if (action.type !== "INIT") {
      const config = {
        method: "POST",
        body: JSON.stringify(state),
        headers: { "Content-Type": "application/json" },
      };

      fetch(baseUrl + "/readers", config);
    }
  }

  // A custom hook for useReducer that enables middleware and afterware, for logging and server updating
  const [state, dispatch] = useReducerWithMiddleware(
    Reducer,
    initialState,
    null,
    updateServerMiddleware
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  async function fetchReaders() {
    setLoading(true);
    setError(false);
    try {
      const data = await fetch(baseUrl + "/readers");
      const readers = await data.json();
      dispatch({ type: "INIT", readers });
      setLoading(false);
    } catch (error) {
      console.error("E' avvenuto il seguente errore: " + error);
      setError(true);
    }
  }

  // At the mount of the provider component start fetching data
  useEffect(() => {
    fetchReaders();
  }, []);

  return (
    <ReadersContext.Provider
      value={{
        readers: state.readers,
        dispatch,
        loading,
        error,
      }}
    >
      {props.children}
    </ReadersContext.Provider>
  );
};

// Custom hook to use context variables, without exporting context name
export const useReadersContext = () => useContext(ReadersContext);

export default Provider;
