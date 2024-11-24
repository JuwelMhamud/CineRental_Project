import starImg from "../assets/star.svg";
export default function Rating({RatingValue}) {
  const stars = Array(RatingValue).fill(starImg);
  return <>
  
  {
    stars.map((star, index)=> 
        <img 
        key={index}
         src={star}
         width="14"
         height="14"
         alt="star"
        />
    )
  }
  </>;
}
