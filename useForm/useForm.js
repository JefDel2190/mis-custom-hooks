import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange, reset];
};

// El initialState igual a un objeto vacio para que si no se manda nada no reviente o de un error

// El initialState hace referencia a un objeto exactamente igual al del useState del FormWithCustomHook, que tenga el nombre de los campos que yo quiero(name, email y password)

// IMPORTANTE: ESTE ES UN CUSTOMHOOK QUE SE VA A ENCARGAR DE MANEJAR LOS FORMULARIOS y se le puede agregar cualquier cantidad de logica aqui por ejemplo se podria mandar otro argumento que sean las reglas de validacion o que campos son obligatorios y hacerse un procedimiento que lo valide, que tengan una bandera que diga si el formulario esta correcto, etc...
