import React from 'react'

const HeroComponents = () => {
    return (
        <>
            <div className="w-full h-fit lg:px-24">
                <div className="grid grid-cols-2 md:mt-8">
                    <div className="">
                        <h1 className="text-7xl font-light text-wrap">Transforming Your Travel Dreams Into <span className=' font-medium'>Unforgettable Adventures</span></h1>
                        <p className='text-gray-600 text-justify mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium maxime magnam facilis? Cum quo consequuntur earum nesciunt consequatur harum sit aliquam aut unde?</p>
                        <button className='px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md'>Book Trip</button>
                    </div>
                    <div className="flex justify-end">
                        <img src="/assets/Items/bali-unsplash.crdownload.jpg" alt="" className=' md:h-[500px] md:w-[500px] rounded-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComponents