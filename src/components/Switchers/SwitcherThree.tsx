import React, { useState } from 'react';

const SwitcherThree: React.FC = () => {
    const [enabled, setEnabled] = useState<boolean>(false)
    return (
        <div>
            <label htmlFor="toggle3" className="flex items-center cursor-pointer select-one">
                <div className="relative">
                    <input type="checkbox" name="" id="toggle3" className='sr-only' onChange={() => setEnabled(!enabled)} />
                    <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5a616b]"></div>
                    <div
                        className={`dot absolute left-1 top-1 h-6 w-6 items-center justify-center rounded-full bg-white transition ${enabled && '!right-1 !translate-x-full  dark:!bg-white'}`}
                    >
                        <span className={`hidden ${enabled && '!block'}`}>
                            ✔️
                        </span>
                        <span className={`${enabled && 'hidden'}`}>
                            ❌
                        </span>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default SwitcherThree;