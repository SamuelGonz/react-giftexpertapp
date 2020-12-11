export const getGifs = async (category) => {
   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
   )}&limit=10&api_key=Pj712JM4RiA2vHG5zM2D9RyUIoSzD8vh`;
   const respuesta = await fetch(url);
   const { data } = await respuesta.json();

   const gifs = data.map((img) => {
      return {
         id: img.id,
         title: img.title,
         url: img.images?.downsized_medium.url,
      };
   });

   return gifs;
};
