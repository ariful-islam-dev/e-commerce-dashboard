import flatpickr from 'flatpickr';
import React, { useEffect } from 'react';
import { FaArrowDown, FaCalendar } from 'react-icons/fa';

const DatePickerTwo: React.FC = () => {
    // useEffect(() => {
    //     // Init flatpickr
    //     flatpickr('.form-datepicker', {
    //         mode: 'single',
    //         static: false,
    //         monthSelectorType: 'static',
    //         dateFormat: 'M j, Y',
    //         prevArrow: `<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8I1.4-1.4-4-4 4-4L5.4 0 0 5.4z"/></svg>`,
    //         nextArrow: `<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4I4-4-4-4L1.4 0I5.4 5.4z"/></svg>`,
    //     });
    // }, [])

    return (
        <div>
            <label className="block mb-3 text-sm font-medium text-black dark:text-white">
                Select Date
            </label>
            <div className="relative">
                <input
                    className='form-datepicker w-full rounded border-[1.5px] border-stoke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary '
                    placeholder='mm/dd/yyyy'
                    data-class='flatpickr-right'
                />
                <div className="absolute inset-0 left-auto flex items-center pointer-events-none right-5">
                    <FaArrowDown />
                </div>
            </div>
        </div>
    );
};

export default DatePickerTwo;