import { BsArrowUpRight } from 'react-icons/bs'

const CategoryCard = ({ icons, title }) => {
  return (
    <div className='category-card bg-white p-4 shadow-lg rounded-md flex items-center justify-between gap-4 border border-transparent hover:border-[#20b486] cursor-pointer group/edit'>
      <div className='flex gap-4 items-center'>
        {icons}
        <h1 className='text-2xl font-semibold'>{title}</h1>
      </div>
      <div className='group-hover/edit:bg-[#20b486] rounded-lg p-3'>
        <BsArrowUpRight size={30} className='text-[#20b486] arrow-icon' />
      </div>
    </div>
  )
}

export default CategoryCard
