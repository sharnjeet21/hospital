
import { hospitals } from '../../assets/data/hospital';
import HospitalCard from './HospitalCard'

const HospitalsList = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-
    [55px]'>{hospitals.map((hospital)=>(
         <HospitalCard key={hospital.id} hospital={hospital}/> 
         ))}
      
    </div>
  )
}

export default HospitalsList
