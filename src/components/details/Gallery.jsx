function Gallery({ hotel }) {

    const images = hotel?.images || []
    return (
      <div className="aspect-square rounded-lg overflow-hidden grid grid-cols-4 grid-rows-2 gap-4">
        <img src={images[0]?.url}
        alt={hotel?.name} 
        className="w-full h-full object-cover col-span-full rounded-lg"
        />
        <img src={images[1]?.url}
        alt={hotel?.name} 
        className="w-full h-full object-cover col-span-2 row-start-2 rounded-lg"
        />
        <img src={images[2]?.url}
        alt={hotel?.name} 
        className="w-full h-full object-cover col-span-2 row-start-2 rounded-lg"
        />
      </div>
    )
  }
  
  export default Gallery