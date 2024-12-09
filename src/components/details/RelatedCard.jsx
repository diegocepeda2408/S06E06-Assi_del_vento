import { priceFormat } from "../../utils"
import { IoLocationOutline } from 'react-icons/io5'

function RelatedCard({ relatedHotel }) {
  return (
    <div className="border-b py-4">
      <div className="grid grid-cols-[.3fr_1fr] gap-4">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img src={relatedHotel?.images[0].url} alt={relatedHotel?.name} />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">{relatedHotel?.name}</h3>
          <div className="flex flex-">
            <div className="flex items-center gap">
              <IoLocationOutline/>
              <p className="text-sm">{relatedHotel?.city.name}, {relatedHotel?.city.country}</p>
            </div>
            <p className="font-semibold">{priceFormat.format(relatedHotel?.price)}</p>
          </div>
        </div>
        <button className="btn">More info</button>
      </div>
    </div>
  )
}

export default RelatedCard