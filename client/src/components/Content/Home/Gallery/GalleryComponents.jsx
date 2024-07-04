import React from 'react';
import GalleryDestinations from '../Destination/DestinationComponents';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PaymentIcon from '@mui/icons-material/Payment';

const GalleryComponents = () => {
    const images = [
        {
            id: 1,
            src: '/assets/Items/borobudur-unsplash.jpg',
            alt: 'bali',
            width: 500,
        },
        {
            id: 2,
            src: '/assets/Items/bromo-unsplash.jpg',
            alt: 'bali',
            width: 360,
        },
        {
            id: 3,
            src: '/assets/Items/malioboro-unsplash.jpg',
            alt: 'bali',
            width: 360,
        },
    ];

    return (
        <>
            <section>
                <div className="flex w-full h-fit xl:px-24 px-8">
                    <div className="grid grid-cols-3 gap-4 xl:gap-0 w-full items-center mt-10">
                        {images.map((image) => (
                            <div
                                key={image.id}
                                className={`flex ${image.id === 1 ? 'md:justify-center' : 'md:justify-end'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="rounded-3xl md:h-80 object-cover"
                                    width={image.width}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-fit px-8 xl:px-24 mt-10" id='topDestination'>
                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className="text-3xl font-light">Top Destinations</h1>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium maxime magnam facilis? Cum quo consequuntur earum nesciunt consequatur harum sit aliquam aut unde?
                            </p>
                        </div>
                        <div className="flex xl:justify-end justify-evenly">
                            <button className="px-8 xl:px-4 xl:py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md">
                                View More
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <GalleryDestinations />
            </section>
            <section>
                <div className="w-full h-fit xl:px-24 px-8 mt-10">
                    <div className='xl:w-[50%]'>
                        <h1 className="text-3xl font-light">Simple Steps</h1>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium maxime magnam facilis? Cum quo consequuntur earum nesciunt consequatur harum sit aliquam aut unde?
                        </p>
                    </div>
                    <div className="grid grid-cols-3 items-baseline mx-auto h-fit mt-8">
                        <div className="w-full h-60 rounded-t-3xl bg-gray-100 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-center items-center">
                            <div className='w-12 h-12 rounded-full bg-white flex justify-center items-center mb-2'>
                                <LocationOnIcon className='text-[#0ea5e9]' />
                            </div>
                            <h3 className=' text-xl xl:text-3xl font-light text-black hover:text-white text-center'>Find Your Trip</h3>
                        </div>
                        <div className="w-full h-60 rounded-t-3xl bg-[#0ea5e9] flex flex-col justify-center items-center">
                            <div className='w-12 h-12 rounded-full bg-white flex justify-center items-center mb-2'>
                                <BookOnlineIcon className='text-[#0ea5e9]' />
                            </div>
                            <h3 className='text-xl xl:text-3xl font-light text-white text-center'>Book A Ticket</h3>
                        </div>
                        <div className="w-full h-60 rounded-t-3xl bg-gray-100 hover:bg-[#0ea5e9] transition-all duration-300 flex flex-col justify-center items-center">
                            <div className='w-12 h-12 rounded-full bg-white flex justify-center items-center mb-2'>
                                <PaymentIcon className='text-[#0ea5e9]' />
                            </div>
                            <h3 className='text-xl xl:text-3xl font-light text-black hover:text-white text-center'>Pay & Start Trip</h3>
                        </div>


                    </div>
                </div>
            </section>


        </>
    );
};

export default GalleryComponents;
