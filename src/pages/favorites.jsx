import {useEffect, useState} from "react";
import Gif from "../components/gif";
import {GifState} from "../context/gif-context";

const Favorites = () => {
  const {gf, favorites} = GifState();
  const [favoriteGIFs, setFavoriteGIFs] = useState([]);

  const fetchFavoriteGIFs = async () => {
    const {data: gifs} = await gf.gifs({
      ids: favorites.join(","),
      api_key: "vMlRbyHZYHnVpRr597pXrIRZkCrP25nT",
    });
    setFavoriteGIFs(gifs);
  };
  

  useEffect(() => {
    fetchFavoriteGIFs();
  }, []);

  return (
    <div className="mt-2">
      <span className="faded-text ">My Favorites</span>
      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {favoriteGIFs.map((gif) => (
          <Gif gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;