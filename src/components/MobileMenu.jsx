import { lock } from '../assets'

const MobileMenu = ({ toggle }) => {
  return (
    <>
      <div
        className={
          toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'
        }
      >
        <ul>
          <li className='p-4 hover:bg-gray-100'>Home</li>
          <li className='p-4 hover:bg-gray-100'>About</li>
          <li className='p-4 hover:bg-gray-100'>Support</li>
          <li className='p-4 hover:bg-gray-100'>Platform</li>
          <li className='p-4 hover:bg-gray-100'>Pricing</li>

          <div className='flex flex-col my-4 gap-4'>
            <button className='flex justify-center items-center border border-[#20b486] bg-transparent px-6 gap-2 py-4 text-xl font-semibold text-gray-500'>
              <img src={lock} alt='icon' />
              Login
            </button>
            <button className='bg-[#20b486] px-8 py-5 rounded-lg text-white font-bold'>
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu
