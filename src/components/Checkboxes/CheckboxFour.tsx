import React, { useState } from 'react';

const CheckboxFour: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false)
    const handleCheck = () => {
        setIsChecked(!isChecked)
    }
    return (
        <div>
            <label htmlFor="checkboxLabelFour" className='flex cursor-pointer select-none items-center'>
                <div className="relative">
                    <input type="checkbox" id="checkboxLabelFour" className='sr-only' onChange={handleCheck} />
                    <div className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${isChecked && 'border-primary bg-gray dark:bg-transparent'}`}>
                        <span className={`h-2.5 w-2.5 rounded-full bg-transparent ${isChecked && '!bg-primary'}`}>
                            {" "}
                        </span>
                    </div>
                </div>
                Checkbox Text
            </label>
        </div>
    );
};

export default CheckboxFour;