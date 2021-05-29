import React from 'react'
import { HiMenuAlt4, HiOutlineSearch } from 'react-icons/hi'



const Header = () => {
    return (
        <div>
            {/* For Mobile View */}
            <div className="flex flex-row justify-between mx-4 my-2 text-2xl text-mirage-500">
                <div> 
                    <HiMenuAlt4/> 
                </div>
                <div> 
                    <HiOutlineSearch/> 
                </div>
            </div>

            {/* For Desktop View */}
        </div>
    )
}

export default Header
