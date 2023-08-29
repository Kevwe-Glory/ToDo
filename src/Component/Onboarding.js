import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../asset/image/hero.jpeg';
import arrowRight from '../asset/icon/arrow-right.png'

const Onboarding = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-11'>
            <img src={hero} alt="img" width={610} height={502} />
            <div className='mt-9 text-center'>
                <div className='bg-[#75A7F9] rounded-md p-5'> 
                    <h5 className='text-xl font-semibold rounded-full py-2 px-4 mt-4'>
                        Stay organized and in control with our powerful to-do app. Whether you're tackling a busy day, planning a project, or simply keeping track of your tasks, we're here to help streamline your productivity journey.
                    </h5>
                {/* <Link to='/account'>
                    <button className='bg-red text-white border rounded-full py-2 px-4 mt-4'>
                        <img src={arrowRight} alt="Arrow Right" className='w-7 h-7 mr-2 inline' />
                    </button>
                </Link> */}
                <Link to='/home'>
                    <button className='bg-red text-white border rounded-full py-2 px-4 mt-4'>
                        <img src={arrowRight} alt="Arrow Right" className='w-7 h-7 mr-2 inline' />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import hero from '../asset/image/hero.jpeg';
// import arrowRight from '../asset/icon/arrow-right.png'


// const Onboarding = () => {
//     return (
//         <div className='flex justify-center items-center flex-col mt-11'>
//             <img src={hero} alt="img" width={610} height={502} />
//             <div className='mt-9 text-center'>
//                 {/* <p className='py-3 px-7 text-black'>CheckMate all activities and get them done today!</p> */}
//                 <h5 className='text-xl font-semibold'>Stay organized and in control with our powerful to-do app. Whether you're tackling a busy day, planning a project, or simply keeping track of your tasks, we're here to help streamline your productivity journey..</h5>
//                 <Link to='/account'>
//                     <button className='bg-red text-white border rounded-full py-2 px-4 mt-4'>
//                         <img src={arrowRight} alt="Arrow Right" className='w-7 h-7 mr-2 inline' />
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }

// export default Onboarding;