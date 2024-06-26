import React from 'react';
import GalleryDestinations from '../Destination/DestinationComponents';

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
                <div className="flex w-full h-fit px-24">
                    <div className="grid grid-cols-3 w-full items-center mt-10">
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
                <div className="w-full h-fit px-24 mt-10" id='topDestination'>
                    <div className="grid grid-cols-2">
                        <div>
                            <h1 className="text-3xl font-light">Top Destinations</h1>
                            <p className="text-gray-600 mt-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusantium maxime magnam facilis? Cum quo consequuntur earum nesciunt consequatur harum sit aliquam aut unde?
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <button className="px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md">
                                View More
                            </button>

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <GalleryDestinations />
            </section>
        </>
    );
};

export default GalleryComponents;
