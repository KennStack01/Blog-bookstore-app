import React, { useState } from 'react'
import { ImShare2 } from 'react-icons/im'
import Modal from 'react-modal'
import SharingModal from '../PageComponents/SharingModal'

Modal.setAppElement('#___gatsby')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

const Sharing = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <button 
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-600 shadow rounded text-center text-white p-3 outline-none z-0 flex flex-row place-items-center"
            >
                <h1 className="mx-2">Share</h1>
                <ImShare2/>
            </button>

            <div className="!z-50 justify-center items-center">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={true}
                    style={customStyles}>
                    <SharingModal/>
                    <div>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="mt-7 mb-1"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>

        </div>
    )
}

export default Sharing
