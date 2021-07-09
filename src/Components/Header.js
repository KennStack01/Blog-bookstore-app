import React from 'react'
import { Link } from 'gatsby'
import MenuHeaderModal from './MenuHeaderModal'


const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-between mx-4 my-2 text-xl text-mirage-500">
                <Link to="/" className="font-semibold text-xl text-white bg-mirage-500 p-3 rounded">
                    VC
                </Link>
                <div className="z-50">
                    <MenuHeaderModal/>
                </div>
            </div>
        </div>
    )
}

export default Header