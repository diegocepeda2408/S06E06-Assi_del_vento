import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

function RatingStars({ rating }) {

  const renderStar = (index) => {
    if (index < Math.floor(rating)) {
      return <IoMdStar/>
    } else if (index < rating) {
      return <IoMdStarHalf />
    }else {
      return <IoMdStarOutline />
    }
  }

  return (
    <div className='flex items-center gap-2'>
      <span className='flex items-center'>
        {[...Array(5)].map((_,index) => { 
          
          return (
            <span key={index} className='text-amber-300 text-xl'>{renderStar(index)}</span>
        )})}
      </span>
    </div>
  )
}

export default RatingStars