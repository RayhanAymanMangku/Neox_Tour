import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import SearchIcon from '@mui/icons-material/Search';
// import { useRef } from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


export function TabsWithSearch() {
    // const searchRef = useRef();
    // const navigate = useNavigate();
    // const [keyword, setKeyword] = useState("");

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            const keyword = event.target.value;
            // navigate(`/Destinations/${keyword}`);
            console.log(keyword);
            alert(`Searching for ${keyword}`);
        }
    };



    const data = [
        {
            label: (
                <div className="flex items-center">
                    <HomeIcon className="mr-2 text-[#0ea5e9]" />
                    All
                </div>
            ),
            value: "All",
            input: (
                <>
                    <div className="lg:px-24 relative">
                        <input className="w-full h-10 rounded-3xl bg-white border placeholder:text-gray-400 pl-4" placeholder="Find for..." onKeyUp={handleSearch} />
                        <button className="absolute inset-y-0 right-0 p-2 lg:absolute lg:right-28 lg:top-0 flex items-center lg:py-2 lg:px-2 ">
                            <SearchIcon />
                        </button>
                    </div>
                </>
            ),
        },
        {
            label: (
                <div className="flex items-center">
                    <ConfirmationNumberIcon className="mr-2 text-[#0ea5e9]" />
                    Trip
                </div>
            ),
            value: "Trip",
            input: (
                <>
                    <div className="lg:px-24 relative">
                        <input className="w-full h-10 rounded-3xl bg-white border placeholder:text-gray-400 pl-4" placeholder="Find for..." onKeyUp={handleSearch} />
                        <button className="absolute inset-y-0 right-0 p-2 lg:absolute lg:right-28 lg:top-0 flex items-center lg:py-2 lg:px-2 ">
                            <SearchIcon />
                        </button>
                    </div>
                </>
            ),
        },
        {
            label: (
                <div className="flex items-center">
                    <RestaurantMenuIcon className="mr-2 text-[#0ea5e9]" />
                    Restaurant
                </div>
            ),
            value: "Restaurant",
            input: (
                <>
                    <div className="lg:px-24 relative">
                        <input className="w-full h-10 rounded-3xl bg-white border placeholder:text-gray-400 pl-4" placeholder="Find for..." onKeyUp={handleSearch} />
                        <button className="absolute inset-y-0 right-0 p-2 lg:absolute lg:right-28 lg:top-0 flex items-center lg:py-2 lg:px-2 ">
                            <SearchIcon />
                        </button>
                    </div>
                </>
            ),
        },
        {
            label: (
                <div className="flex items-center">
                    <DirectionsCarIcon className="mr-2 text-[#0ea5e9]" />
                    Rent
                </div>
            ),
            value: "Rent",
            input: (
                <>
                    <div className="lg:px-24 relative">
                        <input className="w-full h-10 rounded-3xl bg-white border placeholder:text-gray-400 pl-4" placeholder="Find for..." onKeyUp={handleSearch} />
                        <button className="absolute inset-y-0 right-0 p-2 lg:absolute lg:right-28 lg:top-0 flex items-center lg:py-2 lg:px-2 " >
                            <SearchIcon />
                        </button>
                    </div>
                </>
            ),
        },
    ];

    return (
        <Tabs value="All">
            <TabsHeader className="p-4 lg:px-24 bg-white z-10">
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value}>
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, input }) => (
                    <TabPanel key={value} value={value}>
                        {input}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}
