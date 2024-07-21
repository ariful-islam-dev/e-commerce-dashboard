import React, { ReactNode } from 'react';

interface propsType {
    title: string;
    type: string;
    id: string;
    placeHolder: string;
    icon: ReactNode;
}

const Field = ({ title, type, id, placeHolder, icon }: propsType) => {
    return (
        <>
            <label htmlFor="fullName">
                {title}
            </label>
            <div className="relative">
                <span className="absolute left-4.5 top-4">
                    {icon}
                </span>
                <input type="text"
                    className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary'
                    name='fullName'
                    id='fullName'
                    placeholder="Devid Jhon"
                />
            </div>
        </>
    );
};

export default Field;