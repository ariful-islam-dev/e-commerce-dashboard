import React from 'react';
import DefaultLayout from '../../layout';
import Breadcrumb from '../../components/Breadcrumbs';
import { FaCheck, FaExclamationTriangle, FaSkullCrossbones } from 'react-icons/fa';

const Alerts: React.FC = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Alerts' />

            <div className="p-4 bg-white rounded-sm order border-stroke shadow-default dark:border-strokedark dark:bg-boxdark md:p-6 xl:p-9">
                <div className="flex flex-col gap-7.5">
                    {/* Alerts Items  */}
                    <div className="flex w-full border-l-6 border-warning bg-warning bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1b1b24] dark:bg-opacity-30 md:p-9" >
                        <div className="flex items-center justify-center mr-5 rounded-lg h-9 w-9 bg-warning bg-opacity-30">
                            <FaExclamationTriangle />
                        </div>
                        <div className="w-full">
                            <h5 className="mb-3 text-lg font-semibold text-[#9d5425]">Attention Needed</h5>
                            <p className="leading-relaxed text-[#d0915c]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi laborum aut a delectus excepturi reiciendis cupiditate labore eveniet. Magni.
                            </p>
                        </div>
                    </div>
                    {/* Alerts Items  */}
                    <div className="flex w-full border-l-6 border-[#34d399] bg-[#34d399] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1b1b24] dark:bg-opacity-30 md:p-9">
                        <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#34d399]">
                            <FaCheck />
                        </div>
                        <div className="w-full">
                            <h5 className="mb-3 text-lg font-semibold text-[#34d399]">Message Send Successfully</h5>
                            <p className="leading-relaxed text-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                    </div>
                    {/* Alerts Items  */}
                    <div className="flex w-full border-l-6 border-[#f87171] bg-[#f87171] bg-opacity-[15%] px-7 py-8 shadow-md dark:bg-[#1b1b24] dark:bg-opacity-30 md:p-9">
                        <div className="mr-5 flex h-9 w-full max-w-[36px] items-center justify-center rounded-lg bg-[#f87171]">
                            <FaSkullCrossbones />
                        </div>
                        <div className="w-full">
                            <h5 className="mb-3 text-lg font-semibold text-[#b45454]">There were 1 errors with your submission</h5>
                            <p className="leading-relaxed text-[#cd5d5d]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Alerts;