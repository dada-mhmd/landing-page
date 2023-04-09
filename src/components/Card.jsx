import StarRating from './StarRating'

const Card = ({ data }) => {
  return (
    <div className='bg-white drop-shadow-md rounded-2xl overflow-hidden mx-2 my-4'>
      <img
        src={data.linkImg}
        alt='blog img'
        className='h-40 w-full object-cover'
      />

      <div className='p-5 border border-b'>
        <h1 className='py-2 truncate'>{data.title}</h1>
        <StarRating rating={data.rating} />
      </div>

      <h3 className='p-5 text-xl'>{data.price}</h3>

      <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
        {data.category}
      </div>
    </div>
  )
}

export default Card
