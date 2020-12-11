import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
   const lista = ["One Punch"];
   const [categories, setCategories] = useState(lista);

   return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories} />

         <hr />
         <ol>
            {categories.map((category) => (
               <GifGrid category={category} key={category} />
            ))}
         </ol>
      </>
   );
};
