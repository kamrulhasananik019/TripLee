import React from 'react';
import Dark from '../../../Components/Dark/Dark';

const Footer = () => {
    return (
        <div>

            <footer class=" bg-white rounded-lg shadow dark:bg-gray-900 ">
                <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src="https://i.ibb.co/CKYqqMm/Subheading-removebg-preview.png" className='w-40' alt="Flowbite Logo" />

                        </a>
                        <ul class="flex flex-wrap  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>

                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                            <li className='px-4  '> <Dark /> </li>
                        </ul>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 TripLeee. All Rights Reserved.</span>
                </div>
            </footer>

        </div>
    );
};

export default Footer;