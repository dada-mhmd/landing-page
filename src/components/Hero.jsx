import { heroImg } from '../assets'
import { AiOutlineSearch } from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto grid lg:grid-cols-2'>
        <div className='flex flex-col justify-start gap-4'>
          <p className='py-2 text-2xl text-[#20b486] font-medium'>
            START TO SUCCESS
          </p>
          <h1 className='py-2 md:text-6xl text-4xl md:leading-[72px] font-semibold'>
            Access To <span className='text-[#20b486]'>5000+</span> Courses from
            <span className='text-[#20b486]'> 300</span> Instructors &
            Institutions
          </h1>
          <p className='py-2 text-lg text-gray-600'>
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <form className='max-w-[680px] p-4 input-bx-shadow rounded-sm flex justify-between bg-white border'>
            <input
              type='text'
              className='bg-white w-full outline-none'
              placeholder='What do you want to learn?'
            />
            <button>
              <AiOutlineSearch size={20} className='icon text-black' />
            </button>
          </form>
        </div>

        <img
          src={heroImg}
          alt='heroimg'
          className='md:order-last order-first'
        />
      </div>
    </div>
  )
}

export default Hero
