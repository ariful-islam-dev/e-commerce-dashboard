import React, { useState } from 'react';

const SwitcherOne: React.FC = () => {
    const [enabled, setEnabled] = useState<boolean>(false)
    return (
        <div>
            <label htmlFor="toggle1" className="flex items-center cursor-pointer select-one">
                <div className="relative">
                    <input type="checkbox" name="" id="toggle1" className='sr-only' onChange={() => setEnabled(!enabled)} />
                    <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5a616b]"></div>
                    <div
                        className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${enabled && '!right-1 !translate-x-full !bg-primary dark:!bg-white'}`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherOne;