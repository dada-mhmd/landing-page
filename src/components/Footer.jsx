import { logo } from '../assets'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-24'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto grid lg:grid-cols-5 max-[78px]:grid-cols-2 gap-8'>
        <div className='col-span-2'>
          <img src={logo} alt='brand' className='h-[25px]' />
          <h3 className='text-2xl font-bold mt-10'>Contact Us</h3>
          <h3 className='py-2 text-[#6d7e7a]'>Call : +123 400 123</h3>
          <h3 className='py-2 text-[#6d7e7a]'>
            Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
            feugiat auctor felis.
          </h3>
          <h3 className='py-2 text-[#363a3d]'>Email: example@mail.com</h3>

          <div className='flex gap-4 py-4'>
            <div className='p-4 bg-[#e9f8f3] rounded-xl'>
              <FaFacebookF size={25} className='text-[#4dc39e]' />
            </div>
            <div className='p-4 bg-[#e9f8f3] rounded-xl'>
              <FaLinkedinIn size={25} className='text-[#4dc39e]' />
            </div>
            <div className='p-4 bg-[#e9f8f3] rounded-xl'>
              <FaInstagram size={25} className='text-[#4dc39e]' />
            </div>
            <div className='p-4 bg-[#e9f8f3] rounded-xl'>
              <FaTwitter size={25} className='text-[#4dc39e]' />
            </div>
          </div>
        </div>

        {/* second col */}
        <div className=''>
          <h3 className='text-2xl font-bold'>Explore</h3>
          <ul className='py-6 text-[#6d7e7a]'>
            <li className='py-2'>Home</li>
            <li className='py-2'>About</li>
            <li className='py-2'>Course</li>
            <li className='py-2'>Blog</li>
            <li className='py-2'>Contact</li>
          </ul>
        </div>

        {/* third col */}
        <div className=''>
          <h3 className='text-2xl font-bold'>Category</h3>
          <ul className='py-6 text-[#6d7e7a]'>
            <li className='py-2'>Design</li>
            <li className='py-2'>Development</li>
            <li className='py-2'>Marketing</li>
            <li className='py-2'>Buisness</li>
            <li className='py-2'>Lifestyle</li>
            <li className='py-2'>Photography</li>
            <li className='py-2'>Music</li>
          </ul>
        </div>

        <div className='max-[780px]:col-span-2'>
          <h3 className='text-2xl font-bold'>Subscribe</h3>
          <h3 className='py-2 text-[#6d7e7a]'>
            Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
            feugiat auctor felis.
          </h3>

          <form className='py-4'>
            <input
              type='text'
              className='bg-[#f2f3f4] p-4 w-full rounded outline-none'
              placeholder='Email here'
            />
            <button className='max-[780px]:w-full px-5 py-3 my-4 rounded-md bg-[#20b486] text-white md:text-lg font-medium'>
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
