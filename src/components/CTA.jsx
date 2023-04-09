import { cta } from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-[#e9f8f3] py-24'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto grid lg:grid-cols-2 gap-8 items-center'>
        <img src={cta} alt='heroimg' className='w-[650px] mx-auto' />

        <div className=''>
          <h1 className='py-2 text-3xl font-semibold'>
            Join <span className='text-[#20b486]'> World's largest</span>
            learning platform today
          </h1>
          <p className='py-2 text-lg text-gray-600'>
            Start learning by registering for free
          </p>

          <button className='max-[780px]:w-full px-8 py-5 my-5 rounded-md bg-[#20b486] text-white font-bold'>
            Sign Up For Free
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
