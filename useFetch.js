import { useState } from "react";
import { useEffect, useRef } from "react/cjs/react.development";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  // Por defecto cuando esto se llama el componente efectivamente esta montado, porque se esta renderizando la primera vez
  // La idea de el isMounted es que mantenga la referencia cuando este hook esta vivo o cuando el componente que lo usa sigue montado, cuando yo cambie los valores de este isMounted yo no quiero lanzar una renderizacion nuevamente del componente, simplemente estoy manteniendo la referencia a el valor

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    // En el cuerpo no se quiere que haga nada
    return () => {
      isMounted.current = false;
      // Que cuando se desmonte se cambie el valor del isMounted
      // Este cambio no va a disparar nuevamente la renderizacion del componente, simplemente se mantiene la referencia al mismo
    };
  }, []); // La dependencia se deja vacia(que solo lo haga cuando se cargue pr primera vez)

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    // Aca lo que se esta haciendo es que aparezca el loading antes de mostrar el siguiente quote

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({ loading: false, error: null, data });
      });
  }, [url]);

  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setTimeout(() => {
  //         if (isMounted.current) {
  //           setState({ loading: false, error: null, data });
  //         } else {
  //           console.log("setState no se llamo");
  //         }
  //       }, 4000);
  //     });
  // }, [url]);
  // Esto se esta haciendo para poder provocar un error, porque se esta desmontando el componente y luego se esta haciendo el setState, y esto es una operacion que no debemos hacer porque esto lleva fugaz de memoria y poede generar otro tipo de problemas

  return state;
};
