import React from 'react'
import { NavbarSticky } from '../../layouts/Navbar/NavbarComponent'
import { FooterComponents } from '../../layouts/Footer/FooterComponent'
import MainContentDestinations from '../../components/Content/Destinations'

const DestinationPage = () => {
    return (
        <div>
            <NavbarSticky />
            <MainContentDestinations />
            <FooterComponents />
        </div>
    )
}

export default DestinationPage;