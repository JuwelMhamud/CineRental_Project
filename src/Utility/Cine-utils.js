// this function is use in this formate so that You don't have to face any issues at the time of deployment in vercel or Netlify------(this method is useful for fake data)

function getImgURL (name){
 return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
}

export {getImgURL}