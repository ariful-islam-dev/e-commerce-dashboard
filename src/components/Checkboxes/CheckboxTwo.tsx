import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckboxTwo: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
    return (
        <div>
            <label htmlFor="checkboxLabelTwo" className='flex cursor-pointer select-none items-center'>
                <div className="relative">
                    <input type="checkbox" id="checkboxLabelTwo" className='sr-only' onChange={handleCheck} />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${isChecked && 'border-primary bg-gray dark:bg-transparent'}`}>
                        <span className={`opacity-0 ${isChecked && '!opacity-100'}`}>
                            <FaCheck />
                        </span>
                    </div>
                </div>
                Checkbox Text
            </label>
        </div>
    );
};

export default CheckboxTwo;