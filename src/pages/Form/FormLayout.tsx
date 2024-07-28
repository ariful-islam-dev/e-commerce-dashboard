import React, { useState } from 'react';
import DefaultLayout from '../../layout';
import Breadcrumb from '../../components/Breadcrumbs';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const FormLayout: React.FC = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Form Layout' />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* Input Fields  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Contact Form
                            </h3>
                        </div>
                        <form action="#">
                            <div className="p-6.5">
                                <div className="flex flex-col gap-6 mb-4 5 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label htmlFor="" className="mb-2.5 block text-black dark:text-white">
                                            First Name
                                        </label>
                                        <input type="text" placeholder='Enter Your First Name'
                                            className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                    <div className="w-full xl:w-1/2">
                                        <label htmlFor="" className="mb-2.5 block text-black dark:text-white">
                                            Last Name
                                        </label>
                                        <input type="text" placeholder='Enter Your Last Name'
                                            className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>
                                {/* Email Address  */}
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Email
                                    </label>
                                    <div className="relative">
                                        <input type="email" placeholder='Enter Your Email'
                                            className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                    </div>
                                </div>
                                {/* Country  */}
                                <SelectGroupOne />
                                {/* Subject*/}
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <input type="text" placeholder='Enter Your Subject'
                                            className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                    </div>
                                </div>
                                <div className="mb-5.5" >
                                    <label >
                                        Message
                                    </label>
                                    <div className="relative">

                                        <textarea
                                            className='w-full rounded border border-stroke bg-white py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary'
                                            name="message"
                                            id="message"
                                            rows={6}
                                            placeholder="Type your message"
                                        >

                                        </textarea>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <input type="submit" value="Send Message" className='w-full p-4 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col gap-9">
                    {/* Sign In Form  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Sign In Form
                            </h3>
                        </div>
                        {/* Form  */}
                        <form action="#" className='p-6.5'>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Email
                                </label>
                                <div className="relative">
                                    <input type="email" placeholder='Enter Your Email'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Enter Password
                                </label>
                                <div className="relative">
                                    <input type="password" placeholder='6+ Characters, 1 Capital Letter'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mt-5 mb-5.5 flex items-center justify-between">
                                <label htmlFor="checkboxLabelTwo" className='flex items-center cursor-pointer select-none'>
                                    <div className="relative">
                                        <input type="checkbox" id="checkboxLabelTwo" className='sr-only' onChange={handleCheck} />
                                        <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && 'border-primary bg-primary dark:bg-transparent'}`}>
                                            <span className={`opacity-0 ${isChecked && '!opacity-90'}`}>
                                                <FaCheck className='text-white outline-none' />
                                            </span>
                                        </div>
                                    </div>
                                    <p>Remember me</p>
                                </label>
                                <Link to={"#"} className="text-sm text-primary hover:underline">Forget Password?</Link>
                            </div>
                            <div className="mb-5">
                                <input type="submit" value="Sign In" className='w-full p-4 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90' />
                            </div>

                        </form>
                    </div>
                    {/* Sign Up Form  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Sign In Form
                            </h3>
                        </div>
                        {/* Form  */}
                        <form action="#" className='p-6.5'>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Name
                                </label>
                                <div className="relative">
                                    <input type="text" placeholder='Enter Your Full Name'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Email
                                </label>
                                <div className="relative">
                                    <input type="email" placeholder='Enter Your Email'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Enter Password
                                </label>
                                <div className="relative">
                                    <input type="password" placeholder='6+ Characters, 1 Capital Letter'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mb-6">
                                <label className="mb-2.5 block font-medium text-black dark:text-white">
                                    Re-Type Password
                                </label>
                                <div className="relative">
                                    <input type="password" placeholder='Re-Enter your Password'
                                        className="w-full py-4 pl-6 pr-10 text-black bg-transparent border rounded-lg outline-none border-stroke focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />

                                </div>
                            </div>
                            <div className="mb-5">
                                <input type="submit" value="Sign Up" className='w-full p-4 text-white transition border rounded-lg cursor-pointer border-primary bg-primary hover:bg-opacity-90' />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    );
};

export default FormLayout;