import React from 'react'

const HeroComponents = () => {
    return (
        <>
            <div className="w-full h-fit px-8 lg:px-24">
                <div className="grid grid-cols-2 mt-8">
                    <div className="">
                        <h1 className="xl:text-7xl text-2xl font-light text-wrap">Transforming Your Travel Dreams Into <span className=' font-medium'>Unforgettable Adventures</span></h1>
                        <p className='text-gray-600 xl:text-justify text-wrap mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium maxime magnam facilis? Cum quo consequuntur earum nesciunt consequatur harum sit aliquam aut unde?</p>
                        <button className='px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md'>Book Trip</button>
                    </div>
                    <div className="flex justify-end">
                        <img src="/assets/Items/bali-unsplash.crdownload.jpg" alt="" className=' md:h-[500px] md:w-[500px] w-[200px] h-[200px] rounded-3xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroComponents