import React, {useState} from 'react'
import MenuHeaderModal from './MenuHeaderModal'


const Header = () => {
    return (
        <div>
            <div className="flex flex-row justify-between mx-4 my-2 text-xl text-mirage-500">
                <div></div>
                <div className="z-50">
                    <MenuHeaderModal/>
                </div>
            </div>
        </div>
    )
}

export default Header