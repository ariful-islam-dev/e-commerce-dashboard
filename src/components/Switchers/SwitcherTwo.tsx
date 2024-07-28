import React, { useState } from 'react';

const SwitcherTwo: React.FC = () => {
    const [enabled, setEnabled] = useState<boolean>(false)
    return (
        <div x-data="{ switcherToggle:false}">
            <label htmlFor="toggle2" className="flex items-center cursor-pointer select-one">
                <div className="relative">
                    <input type="checkbox" name="" id="toggle2" className='sr-only' onChange={() => setEnabled(!enabled)} />
                    <div className="shadow-inner h-5 w-14 rounded-full bg-meta-9 dark:bg-[#5a616b]"></div>
                    <div
                        className={`dot absolute left-0 -top-1 h-7 w-7 shadow-switcher-2 rounded-full bg-white transition ${enabled && '!right-0 !translate-x-full !bg-primary dark:!bg-white'}`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherTwo;