import React from 'react'

function ProductCard() {
    return (
        <section className="text-black dark:text-white body-font">
            <div className="container px-6 py-8 md:py-16 mx-auto dark:bg-gray-900">
                <div className='lg:w-1/2 w-full mb-6 '>
                    <h1 className='text-3xl font-medium title-font mb-2 text-black dark:text-white'>Featured Products</h1>
                    <div className="h-1 bg-orange-500 w-60 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="border-2 dark:border-gray-400 rounded-lg h-full cursor-pointer">
                            <div className="flex justify-center">
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://dummyimage.com/720x400" alt="blog" />
                            </div>
                            <div className='p-5 border-t-2 dark:border-gray-400'>
                                <h2 className='font-medium text-gray-500'>HoodieHub</h2>
                                <h1 className='font-bold mb-3 title-font text-xl'>This is title</h1>
                                <p className='mb-2'>$ 50</p>
                                <div className="flex justify-center">
                                    <button className="rounded-lg text-white bg-orange-500 p-2 w-full hover:bg-orange-600 hover:transition duration-300">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="border-2 dark:border-gray-400 rounded-lg h-full cursor-pointer">
                            <div className="flex justify-center">
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://dummyimage.com/720x400" alt="blog" />
                            </div>
                            <div className='p-5 border-t-2 dark:border-gray-400'>
                                <h2 className='font-medium text-gray-500'>HoodieHub</h2>
                                <h1 className='font-bold mb-3 title-font text-xl'>This is title</h1>
                                <p className='mb-2'>$ 50</p>
                                <div className="flex justify-center">
                                    <button className="rounded-lg text-white bg-orange-500 p-2 w-full hover:bg-orange-600 hover:transition duration-300">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 dark:border-gray-400 drop-shadow-lg">
                        <div className="border-2 dark:border-gray-400 rounded-lg h-full cursor-pointer">
                            <div className="flex justify-center">
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://dummyimage.com/720x400" alt="blog" />
                            </div>
                            <div className='p-5 border-t-2 dark:border-gray-400'>
                                <h2 className='font-medium text-gray-500'>HoodieHub</h2>
                                <h1 className='font-bold mb-3 title-font text-xl'>This is title</h1>
                                <p className='mb-2'>$ 50</p>
                                <div className="flex justify-center">
                                    <button className="rounded-lg text-white bg-orange-500 p-2 w-full hover:bg-orange-600 hover:transition duration-300">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/4 drop-shadow-lg">
                        <div className="border-2 dark:border-gray-400 rounded-lg h-full cursor-pointer">
                            <div className="flex justify-center">
                                <img className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out" src="https://dummyimage.com/720x400" alt="blog" />
                            </div>
                            <div className='p-5 border-t-2 dark:border-gray-400'>
                                <h2 className='font-medium text-gray-500'>HoodieHub</h2>
                                <h1 className='font-bold mb-3 title-font text-xl'>This is title</h1>
                                <p className='mb-2'>$ 50</p>
                                <div className="flex justify-center">
                                    <button className="rounded-lg text-white bg-orange-500 p-2 w-full hover:bg-orange-600 hover:transition duration-300">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>
        </section>
    )
}

export default ProductCard
