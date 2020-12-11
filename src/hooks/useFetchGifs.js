import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
   const [state, setState] = useState({
      data: [],
      loading: true,
   });

   useEffect(() => {
      getGifs(category)
         .then((imgs) =>
            setState({
               data: imgs,
               loading: false,
            })
         )
         .catch(() => console.log("Ocurrio algo con la peticion de gifs"));
   }, [category]);

   return state;
};
