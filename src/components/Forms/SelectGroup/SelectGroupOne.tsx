import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const SelectGroupOne: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('')
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false)

    const changeTextColor = () => {
        setIsOptionSelected(true)
    }

    return (
        <div className='mb-5'>
            <label htmlFor="" className='block mb-3 text-black dark:text-white'>Select Country</label>
            <div className="relative z-20 bg-white dark:bg-form-input">
                <select value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value)
                        changeTextColor();
                    }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input  ${isOptionSelected ? 'text-black dark:text-white' : ''}`}
                >
                    <option value="" className="text-body disabled dark:text-bodydark">Select Country</option>
                    <option value="USA" className="text-body dark:text-bodydark">USA</option>
                    <option value="UK" className="text-body dark:text-bodydark">UK</option>
                    <option value="Canada" className="text-body dark:text-bodydark">Canada</option>

                </select>
                <span className="absolute z-10 -translate-y-1/2 top-1/2 right-4">
                    <FaAngleDown className='w-6 h-6' />
                </span>
            </div>
        </div>
    );
};

export default SelectGroupOne;