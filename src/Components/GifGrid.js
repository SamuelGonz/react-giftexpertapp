import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
   const { data, loading } = useFetchGifs(category);

   return (
      <>
         <h3 className="animate__animated animate__fadeIn">{category}</h3>

         {loading ? "Cargando..." : "Data cargada"}
         <div className="card-grid">
            {data.map((img) => (
               <GifGridItem key={img.id} {...img} />
            ))}
         </div>
      </>
   );
};
