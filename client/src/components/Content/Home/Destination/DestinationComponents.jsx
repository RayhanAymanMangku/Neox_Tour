import React from 'react';
import FormComponent from '../Forms/HeroForms';

const CustomCard = ({ category, title, description, buttonText, imgSrc, imgAlt, buttonType, size }) => (
    <div className={`relative rounded-xl overflow-hidden shadow-lg bg-gray-800 text-white ${size}`}>
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4  flex flex-col justify-end">
            {category && <p className="text-xs font-light uppercase mb-2">{category}</p>}
            {title && <div className="text-lg font-light bg-white/10 backdrop-blur-sm rounded-2xl text-center">{title}</div>}
            {description && <p className="text-sm font-light">{description}</p>}
            {buttonText && (
                <button className={`mt-2 px-3 py-1 rounded ${buttonType === 'primary' ? 'bg-blue-600' : 'bg-gray-600'}`}>
                    {buttonText}
                </button>
            )}
        </div>
    </div>
);

const GalleryDestinations = () => {
    const cards = [
        {
            id: 1,
            category: 'Mountain',
            title: 'Bromo Mountain',
            description: '',
            buttonText: '',
            imgSrc: '/assets/Items/bromo-unsplash.jpg',
            imgAlt: 'mountain',
            size: 'h-96 w-52',
        },
        {
            id: 2,
            category: 'City',
            title: 'Malioboro Street',
            description: '',
            buttonText: '',
            imgSrc: '/assets/Items/malioboro-unsplash.jpg',
            imgAlt: 'city',
            size: 'h-96 w-52',
        },
        {
            id: 3,
            category: 'Beach',
            title: 'Nusa Penida Island',
            description: '',
            buttonText: '',
            imgSrc: '/assets/Items/bali-unsplash.crdownload.jpg',
            imgAlt: 'beach',
            size: 'h-96 w-52',
        },
        {
            id: 4,
            category: 'Beach/Island',
            title: 'Padar Island, Labuan Bajo',
            description: '',
            buttonText: '',
            imgSrc: '/assets/Items/pinkbeach.jpg',
            imgAlt: 'sleep',
            size: 'md:h-32 md:w-80',
        },
        {
            id: 5,
            category: 'Beach',
            title: 'Pink Beach, Labuan Bajo',
            description: '',
            buttonText: '',
            imgSrc: '/assets/Items/pinkbeach.jpg',
            imgAlt: 'sleep',
            size: 'md:h-32 md:w-80',
        },
    ];

    return (
        <>
            <div className="w-full px-24 mt-8">
                <div className="grid grid-cols-2">
                    <div className="">
                        <div className="flex md:flex-row gap-4 w-fit">
                            {cards.slice(0, 3).map((card) => (
                                <CustomCard key={card.id} {...card} />
                            ))}
                        </div>
                        <div className="flex md:flex-row gap-4 w-fit mt-4">
                            {cards.slice(3).map((card) => (
                                <CustomCard key={card.id} {...card} />
                            ))}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="md:ml-20 w-full">
                            <h1 className="text-3xl font-light mb-4">Heading</h1>
                            <FormComponent />
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default GalleryDestinations;
