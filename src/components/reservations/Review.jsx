import { useState } from "react"
import ReviewRating from "./ReviewRating"
import useApiFetch from "../../hooks/useApiFetch"
import { Bounce, toast } from 'react-toastify'

const initialState = {
  hotelId: null,
  rating: 0,
  comment: ''
}
function Review({ hotelId, closeModal }) {
 
  const [_, fetchReview] = useApiFetch()
  const [review, setReview] = useState(initialState)

  const handleSubmit = () => {
    review.hotelId = hotelId

    const {comment, rating} = review

    if(!comment || rating == 0){
      toast.warn('Please fill all fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    } else {
      fetchReview({
        url: '/reviews',
        method: 'POST',
        body: review
      })
      setReview(initialState)
      closeModal()
      toast.success('Review sended succesfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }
  
  return (
    <div className="w-80">
      <h2 className="text-2xl font-semibold mb-4">
        Review
      </h2>

      <div className="mb-4">
        <ReviewRating setReview={setReview}/>
      </div>

      <textarea
      className="input-form resize-none h-24 mb-4"
      placeholder="Write your review here ..."
      value={review.comment}
      onChange={(e) => setReview({...review, comment: e.target.value})}
      ></textarea>

      <div className="flex justify-between">
        <button
        className="btn"
        onClick={handleSubmit}
        >
          Submit
        </button>
        <button
        className="btn bg-red-600"
        onClick={closeModal}
        >
          Cancel
        </button>
      </div>

    </div>
  )
}

export default Review