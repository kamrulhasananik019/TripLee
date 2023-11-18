import React, { useState } from 'react';
import cox from '../../assets/photo_2023-11-16_14-26-14.jpg'

const Packages = () => {
    const [money, setMoney] = useState(null);
    console.log(money);
    return (
        <div className='mt-16' >
            <h1 className='text-center font-semibold text-4xl text-[#50CAEB]  '>Find Your Best Packages</h1>
            <hr className='my-5 container mx-auto' />
            <div className='container mx-auto '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
                    <div className="card  shadow-xl">
                        <figure><img src={cox} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Cox's bazar
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='font-semibold'>Includes Hotel ,Chander Gari, Moheskhali Downtrip,Internal Vehicle of Moheskhali,Para Sailing,Quad Bike</p>
                            <div className="flex justify-between pt-5">
                                <div className=''>
                                    {money ? (
                                        money === 'Bangladesh' ? (
                                            <p className="badge badge-outline">7999 tk</p>
                                        ) : (
                                            <p className="badge badge-outline">299$</p>
                                        )
                                    ) : (
                                        <p className="badge badge-outline">7999 tk</p>
                                    )}

                                    <label for="underline_select" class="sr-only">Underline select</label>
                                    <select value={money}
                                        onChange={(e) => setMoney(e.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option>Bangladesh</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <button className="badge badge-outline hover:bg-lime-500 bg-[#50CAEB]
                                p-3 text-white">BUY NOW !</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1589307357838-9ce2259ac411?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sajek
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='font-semibold'>2day 1 night package</p>
                            <div className="card-actions justify-between pt-5">
                                <div className=''>
                                    {money ? (
                                        money === 'Bangladesh' ? (
                                            <p className="badge badge-outline">4999 tk</p>
                                        ) : (
                                            <p className="badge badge-outline">149$</p>
                                        )
                                    ) : (
                                        <p className="badge badge-outline">4999 tk</p>
                                    )}

                                    <label for="underline_select" class="sr-only">Underline select</label>
                                    <select value={money}
                                        onChange={(e) => setMoney(e.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option>Bangladesh</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <button className="badge badge-outline hover:bg-lime-500 bg-[#50CAEB]
                                p-3 text-white">BUY NOW !</button>
                            </div>
                        </div>
                    </div><div className="card  shadow-xl">
                        <figure><img src="https://images.unsplash.com/photo-1632930503647-88def02e570f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Tanguar Hawor, Sunamganj
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='font-semibold'>2day 1 night at the boat[Food included]</p>
                            <div className="card-actions justify-between pt-5">
                                <div className=''>
                                    {money ? (
                                        money === 'Bangladesh' ? (
                                            <p className="badge badge-outline">4499 tk</p>
                                        ) : (
                                            <p className="badge badge-outline">129$</p>
                                        )
                                    ) : (
                                        <p className="badge badge-outline">4499 tk</p>
                                    )}

                                    <label for="underline_select" class="sr-only">Underline select</label>
                                    <select value={money}
                                        onChange={(e) => setMoney(e.target.value)} id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option>Bangladesh</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <button className="badge badge-outline hover:bg-lime-500 bg-[#50CAEB]
                                p-3 text-white">BUY NOW !</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Packages;