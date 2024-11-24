import { useState } from "react";
import { getImgURL } from "../Utility/Cine-utils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../Context";
import {useContext} from 'react'

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const {cartData, setCartData} = useContext(MovieContext)


  //    selecting a movie for Modal

  const handleMovieSelection = (movie)=>{
    setSelectedMovie(movie)
    setShowModal(true)
  }


  //   for closing the modal
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  // add to cart
  const handleAddToCart = (e, movie)=>{
    e.stopPropagation()

    const found = cartData.find((item)=>{ return item.id === movie.id})

    if (!found){
      setCartData([...cartData, movie])
    }
    else{
      alert(`The movie ${movie.title} has already been added`)
    }
    
   
  }



  return (
    <>
      {showModal && (
        <MovieDetailsModal
         movie={selectedMovie}
         onClose={handleModalClose} 
         onAddCart={handleAddToCart} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={()=> handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgURL(movie.cover)}
            alt={movie.cover}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating RatingValue={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e)=>handleAddToCart(e, movie)}

            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
