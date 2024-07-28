import React from 'react';
import DefaultLayout from '../../layout';
import Breadcrumb from '../../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaShoppingCart, FaUserCheck } from 'react-icons/fa';

const Buttons: React.FC = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Buttons' />
            {/* Normal Button Items  */}
            <div className="mb-10 bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-4 border-b border-stroke px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Normal Button
                    </h3>
                </div>
                <div className="p-4 md:p-6 xl:p-9">
                    {/* Button Group One  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white rounded-md bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white rounded-full bg-primary hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center border rounded-md text-primary border-primary hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                    </div>
                    {/* Button Group Two  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white bg-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white rounded-md bg-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white rounded-full bg-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center border rounded-md text-meta-3 border-meta-3 hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                    </div>
                    {/* Button Group Three  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white bg-black hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white bg-black rounded-md hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-white bg-black rounded-full hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center justify-center px-10 py-4 font-medium text-center text-black border border-black rounded-md dark:text-white dark:border-white hover:bg-opacity-90 lg:px-8 xl:px-10'>
                            Button
                        </Link>
                    </div>
                </div>
            </div>
            {/* Button With Icon items  */}
            <div className="mb-10 bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-4 border-b border-stroke px-7 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Button With Icon
                    </h3>
                </div>
                <div className="p-4 md:p-6 xl:p-9">
                    {/* Button Group One  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-primary hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaEnvelope />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-primary rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaEnvelope />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-primary rounded-full hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaEnvelope />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-primary border border-primary rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaEnvelope />
                            </span> Button With Icon
                        </Link>
                    </div>
                    {/* Button Group Two  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-meta-3 hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaShoppingCart />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-meta-3 rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaShoppingCart />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-meta-3 rounded-full hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaShoppingCart />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-meta-3 border border-meta-3 rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaShoppingCart />
                            </span> Button With Icon
                        </Link>
                    </div>
                    {/* Button Group Three  */}
                    <div className="flex flex-wrap gap-5 mb-7 5 xl:gap-20">
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-black hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaUserCheck />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-black rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaUserCheck />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-white bg-black rounded-full hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaUserCheck />
                            </span> Button With Icon
                        </Link>
                        <Link
                            to={'#'}
                            className='inline-flex items-center gap-2.5 justify-center px-10 py-4 font-medium text-center text-black dark:text-white dark:border-white border border-black rounded-md hover:bg-opacity-90 lg:px-4 xl:px-6'>
                            <span>
                                <FaUserCheck />
                            </span> Button With Icon
                        </Link>
                    </div>
                </div>
            </div>

        </DefaultLayout>
    );
};

export default Buttons;