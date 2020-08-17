import React, {useState,useEffect} from 'react';
import Gif from './Gif'
import getGifs from '../services/getGifs'

const ListOfGifs = ({params}) => {

    const {keyword} = params
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      setLoading(true)
      getGifs({ keyword })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
      });
    }, [keyword]);

  if(loading){
    return <p>cargando ...</p>;
  } 

  return (
    <>
      {gifs.map((gif) => {
        return <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />;
      })}
    </>
  );
};

export default ListOfGifs;