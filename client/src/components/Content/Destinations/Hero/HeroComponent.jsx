import React from 'react'
import { TabsWithSearch } from '../Tabs/SearchTabs'
import TripGalleryComponents from '../Gallery/TripGalleryComponents'

const HeroComponent = () => {
    return (
        <>
            <div className="mt-8">
                <TabsWithSearch />
                <TripGalleryComponents />
            </div>
        </>

    )
}

export default HeroComponent