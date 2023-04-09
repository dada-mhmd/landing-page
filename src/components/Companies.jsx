import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from '../assets'
const Companies = () => {
  return (
    <div className='w-full bg-white py-[40px]'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto'>
        <h1 className='text-center text-2xl font-bold text-[#536e96]'>
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className='text-center text-[#536e96] md:text-xl py-8'>
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>

        <div className='flex justify-center md:gap-8 w-28 m-auto'>
          <img src={companyLogo1} alt='company brand' />
          <img src={companyLogo2} alt='company brand' />
          <img src={companyLogo3} alt='company brand' />
          <img src={companyLogo4} alt='company brand' />
        </div>
      </div>
    </div>
  )
}

export default Companies
