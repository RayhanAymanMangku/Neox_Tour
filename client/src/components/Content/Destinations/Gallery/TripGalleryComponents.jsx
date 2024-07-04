import React from 'react'
import { useState, useEffect } from 'react'

import CardComponents from './CardTrip';

const TripGalleryComponents = () => {
    const [wisataData, setWisataData] = useState([]);
    const [tripData, setTripData] = useState([]);
    const [recEventData, setRecEventData] = useState([]);

    useEffect(() => {
        fetch('/data/Trip/dummy_trip.json')
            .then(response => response.json())
            .then(data => setTripData(data.trips))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('/data/Tour/dummy_wisata.json')
            .then(response => response.json())
            .then(data => setWisataData(data.tours))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        fetch('/data/RecommendationsEvent/dummy_event.json')
            .then(response => response.json())
            .then(data => setRecEventData(data.events))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


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
                    {recEventData.map(recEvent => {
                        return (
                            <div className="flex justify-center">
                                <CustomCard key={recEvent.id} {...recEvent} buttonText="Book Now" />
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
            <div className="flex px-4 xl:px-24 mt-8">
                <div className="grid xl:grid-cols-2 w-full items-center">
                    <div className="">
                        {wisataData.map(tour => (
                            <CardComponents key={tour.id} {...tour} />
                        ))}
                    </div>
                    <div className="">
                        {tripData.map(trip => (
                            <CardComponents key={trip.id} {...trip} />

                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TripGalleryComponents

function CustomCard({ image, title, buttonText }) {
    return (
        <div className="flex flex-col rounded-lg overflow-hidden shadow-sm">
            <img className="h-48 w-full object-cover object-center" src={image} alt='' />
            <div className="p-6">
                <h1 className="text-xl font-light">{title}</h1>
                <button className="px-4 py-2 bg-[#0ea5e9] hover:text-[#0ea5e9] hover:bg-white transition-all duration-300 rounded-full text-white font-extralight mt-4 hover:shadow-md ">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}