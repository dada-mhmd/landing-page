import Card from './Card'
import Slider from 'react-slick'
import { courses } from '../data'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='w-full bg-white py-32'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto'>
        <h1 className='text-3xl font-bold py-3'>
          Students <span className='text-[#20b486]'>Feedback</span>
        </h1>

        <p className='text-[#6d737a]'>
          Various versions have evolved over the years, sometimes by accident
        </p>

        <Slider {...settings}>
          <FeedbackCard />
          <FeedbackCard />
        </Slider>
      </div>
    </div>
  )
}

export default Feedback
