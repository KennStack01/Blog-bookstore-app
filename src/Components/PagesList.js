import React from 'react'
import { Link } from 'gatsby'


const activeLinkStyles = {borderTopWidth: "thick", borderColor: "#192734", cursor: "pointer", marginTop: "0px"}

const PagesList = () => {
    return (
        <div>
            <div class="grid grid-cols-1 ml-5 divide-y divide-mirage-500 mt-5">
                <div className="bottom-0"></div>
                <div className="flex flex-row justify-around text-md mt-5 text-mirage-500">
                    <Link to="/" activeStyle={activeLinkStyles} activeClassName="active" className="cursor-pointer">Chroniques</Link>
                    <Link to="/recits" activeStyle={activeLinkStyles} activeClassName="active" className="cursor-pointer">Récits et Poésies</Link>
                    <Link to="/boutique" activeStyle={activeLinkStyles} activeClassName="active" className="cursor-pointer">Boutique</Link>
                </div>
            </div>
        </div>
    )
}

export default PagesList
