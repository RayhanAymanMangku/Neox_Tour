import React from 'react'

const TripGalleryComponents = () => {
    const data = [
        {
            id: 1,
            title: "Merapi Lava Tour Jeep",
            image: "https://www.dejogja.co.id/wp-content/uploads/2024/01/Lava-Tour-Merapi-Jogja.jpeg",
        },
        {
            id: 2,
            title: "Candi Borobudur Sunrise Tour",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cd/e2/ce/caption.jpg?w=500&h=400&s=1",
        },
        {
            id: 3,
            title: "Prambanan Temple Show",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0c/25/e0/caption.jpg?w=500&h=400&s=1",
        },
        {
            id: 4,
            title: "1 day Tour Jomblang cave",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/a9/c4/89/caption.jpg?w=500&h=400&s=1",
        },
        {
            id: 5,
            title: "Tour Keraton Yogyakarta",
            image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/57/7e/f2/caption.jpg?w=500&h=400&s=1",
        }
    ]
    return (
        <>

            <div className="flex flex-col mt-10 px-8 xl:px-24">
                <h1 className="text-3xl font-light">Explore Yogyakarta</h1>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="flex w-full px-8 lg:px-24 mt-8">
                <div className="grid grid-cols-2 gap-2 lg:grid-cols-5 lg:gap-4 mx-auto">
                    {data.map(trip => {
                        return (
                            <div key={trip.id} className="flex justify-center">
                                <CustomCard imgSrc={trip.image} title={trip.title} buttonText="Book Now" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex px-8 xl:px-24">
                <div className="flex justify-center">
                    <button className="px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md">
                        View More
                    </button>
                </div>
            </div>
        </>
    )
}

export default TripGalleryComponents

function CustomCard({ imgSrc, title, buttonText }) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm">
            <img className="h-48 w-full object-cover object-center" src={imgSrc} alt='' />
            <div className="p-6">
                <h1 className="text-xl font-light">{title}</h1>
                <button className="px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md ">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}