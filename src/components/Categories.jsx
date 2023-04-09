import CategoryCard from './CategoryCard'
import { BsVectorPen } from 'react-icons/bs'
import { TiHtml5 } from 'react-icons/ti'
import { TbMicrophone2, TbMusic } from 'react-icons/tb'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { WiSunrise } from 'react-icons/wi'
import { AiOutlineCamera } from 'react-icons/ai'
import { BiData } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { FaUniversity } from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
      <div className='max-w-[600px] px-10 lg:max-w-[1480px] m-auto'>
        <h1 className='text-3xl md:leading-[72px] font-bold'>
          Most <span className='text-[#20b486]'> Popular Categories</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Various versions have evolved over the years, sometimes by accident,
        </p>

        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
          <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
          <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
          <CategoryCard
            icons={<TbMicrophone2 size={30} />}
            title={'Marketing'}
          />
          <CategoryCard
            icons={<HiOutlineBriefcase size={30} />}
            title={'Business'}
          />

          <CategoryCard icons={<WiSunrise size={30} />} title={'Lifestyle'} />
          <CategoryCard
            icons={<AiOutlineCamera size={30} />}
            title={'Photography'}
          />
          <CategoryCard icons={<TbMusic size={30} />} title={'Music'} />
          <CategoryCard icons={<BiData size={30} />} title={'Data Science'} />

          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={'Personal Develop'}
          />
          <CategoryCard
            icons={<TiHtml5 size={30} />}
            title={'Health & Fitness'}
          />
          <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
          <CategoryCard icons={<FaUniversity size={30} />} title={'Teaching'} />
        </div>
      </div>
    </div>
  )
}

export default Categories
