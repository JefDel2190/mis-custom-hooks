import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState); // 10

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const reset = () => {
    setState(initialState);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  return {
    state,
    increment,
    reset,
    decrement,
  };
  // Perfectamente se puede regresar un arreglo
  // Aveces es mas facil hacerlo con objetos y otras con arreglos
};

// Centrar la logica de un contador de una manera mas abstracta para poder reutilizarla, en lugar de estar usando el useState, y para ello se puede usar un CustomHook
// Un customHook no es mas que una simple funcion

// El initialState se puede pedir en el argumento del arrow function o en el argumento del useState
