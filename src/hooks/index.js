import { useEffect, useReducer, useRef } from "react";
/* Custom hook for useReducer that enables middlewares and afterwares */
const useReducerWithMiddleware = (
  reducer,
  initialState,
  middlewareFunc,
  afterwareFunc
) => {
  // The usual useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // This is needed to keep reference of the object "action" and pass it to the afterware logic (i.e. useEffect)
  const actionRef = useRef();

  // This is the "afterwarelogic" this runs **after** the action is dispatched, why?
  // It's a useEffect that has 'state' as dependency, so whenever the state changes, this hook kicks in
  useEffect(() => {
    if (!actionRef.current) return;
    if (afterwareFunc) afterwareFunc(state, actionRef.current);
  }, [afterwareFunc, state]);
  
  // This is the enhanced 'dispatch', it runs the middleware function if there is any, then do the normal dispatch
  // we return this to the components to be used as dispatch method.
  const dispatchWithMiddleware = action => {
    if (middlewareFunc) middlewareFunc(action);
    actionRef.current = action;
    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
};

export { useReducerWithMiddleware };
