import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React, { useState } from 'react'

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <>
            <div>
                <button
                    onClick={openModal}
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold rounded-lg">Buy now</button>
            </div>

            {isOpen && (
                <Dialog open={isOpen} onClose={closeModal} className="relative-z-10">
                    <div className="fixed inset-0 bg-black bg-opacity-25">
                        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center px-2 sm:px-6">
                            <DialogPanel className="bg-white dark:bg-gray-700 dark:text-white w-full max-w-sm lg:max-w-xl rounded-2xl p-6 shadow-xl">
                                <DialogTitle className="text-lg font-semibold text-center mb-4">Enter Shipping Details</DialogTitle>
                                <form className="space-y-4">
                                    <div>
                                    <label className=''>Enter full name</label>
                                    <input type="text" className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-600 outline-none" required />
                                    </div>
                                    <div>
                                    <label className=''>Enter full address</label>
                                    <input type="text" className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-600 outline-none" required />
                                    </div>
                                    <div>
                                    <label className=''>Enter Pincode</label>
                                    <input type="text" className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-600 outline-none" required />
                                    </div>
                                    <div>
                                    <label className=''>Enter Mobile number</label>
                                    <input type="text" className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-600 outline-none" required />
                                    </div>

                                    <button 
                                    onClick={closeModal}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">Confirm Order</button>
                                </form>
                            </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    )
}

export default Modal
