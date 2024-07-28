import React, { useState } from 'react';
import { FaCross } from 'react-icons/fa';

const CheckboxThree: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
    return (
        <div>
            <label htmlFor="checkboxLabelThree" className='flex cursor-pointer select-none items-center'>
                <div className="relative">
                    <input type="checkbox" id="checkboxLabelThree" className='sr-only' onChange={handleCheck} />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && 'border-primary bg-gray dark:bg-transparent'}`}>
                        <span className={`opacity-0 ${isChecked && '!opacity-100'}`}>
                            <FaCross />
                        </span>
                    </div>
                </div>
                Checkbox Text
            </label>
        </div>
    );
};

export default CheckboxThree;