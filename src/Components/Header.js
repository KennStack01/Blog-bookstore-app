import React, {useState} from 'react'
// import Modal from 'react-modal'
import { 
    HiDotsVertical, 
    HiOutlineSearch 
} from 'react-icons/hi'

// import Navbar from './Navbar'

import MenuHeaderModal from './MenuHeaderModal'


// Modal.setAppElement('#___gatsby')

// const customStyles = {
//   content : {
//     top                   : '30%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     width                 : '24em',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// }


const Header = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    // const openModal = () => {
    //     setIsOpen(true)
    // }
    // const closeModal = () => {
    //     setIsOpen(false)
    // }

    const specialFx = () => {
        if(modalIsOpen){
            window.addEventListener("click", () => {
                // window.alert("Hello")

                setIsOpen(false)
            })
        }
    }

    const handleOpenState = () => {
        if(!modalIsOpen) {
            // closeModal()
            setIsOpen(true)
        } 
        else {
            // openModal()
            setIsOpen(false)
            // specialFx()
        }
    }

    

    return (
        <div>
            {/* For Mobile View */}
            <div className="flex flex-row justify-between mx-4 my-2 text-xl text-mirage-500">
                {/* <div className="flex flex-row font-semibold cursor-pointer" onClick={openModal}>  */}
                <div className="flex flex-row font-semibold cursor-pointer" onClick={handleOpenState}> 
                <div className="mt-1">
                    <HiDotsVertical/> 
                </div>
                <p className="text-xl font-semibold mt-0">menu</p>
                </div>
                {/* <div className="font-semibold text-2xl cursor-pointer mt-1"> 
                    <HiOutlineSearch/> 
                </div> */}
            </div>
            
            
            {/* { modalIsOpen && <MenuHeaderModal/>} */}

            {
                modalIsOpen ? (<MenuHeaderModal/>) : ''
            }


            {/* <div className="justify-center items-center">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={true}
                    style={customStyles}>
                    <Navbar/>
                    <div className="flex flex-row justify-end mr-5">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="mt-7 mb-1"
                        >
                            Fermer
                        </button>
                    </div>
                </Modal>
            </div> */}
        </div>
    )
}

export default Header