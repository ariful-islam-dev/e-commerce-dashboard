import { useEffect, useRef, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { FaUserGraduate, FaUserNurse, FaUserSecret } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownMessage = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [notifying, setNotifying] = useState(true)

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;

            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
            setDropdownOpen(false)
        }
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler)
    })
    return (
        <li className="relative">
            <Link
                ref={trigger}
                onClick={() => {
                    setDropdownOpen(!dropdownOpen)
                    setNotifying(false)
                }}
                to={"#"}
                className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
            >
                <span
                    className={`absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? 'hidden' : 'inline'
                        }`}>
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 -z-1 animate-ping bg-meta-1"></span>
                </span>
                <AiOutlineMessage />
            </Link>
            {/* Dropdown Message */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:bg-slate-600 dark:border-strokedark sm:right-0 sm:right-0 sm:w-80 ${dropdownOpen === true ? 'block' : 'hidden'
                    }`}
            >
                <div className="px-4.5 py-3">
                    <h5 className="text-sm font-medium text-bodydark2">Message</h5>
                </div>
                <ul className="flex flex-col h-auto overflow-y-auto">
                    {/* Message  */}
                    <li>
                        <Link
                            to={"/messages"}
                            className="flex gap-4.5 border-t border-stroke px-4.5 py-5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <div className="h-12.5 2-12.5 rounded-full">
                                <FaUserNurse className="w-12 h-12" />
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">Dr. Smith</h6>
                                <p className="text-sm">I like your confidence 🪖</p>
                                <p className="text-sm">2min ago 👁️‍🗨️</p>
                            </div>
                        </Link>
                    </li>
                    {/* Message-2  */}
                    <li>
                        <Link
                            to={"/messages"}
                            className="flex gap-4.5 border-t border-stroke px-4.5 py-5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <div className="h-12.5 2-12.5 rounded-full">
                                <FaUserGraduate className="w-12 h-12" />
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">Julio Regard</h6>
                                <p className="text-sm">Can You share your offer? 🔥</p>
                                <p className="text-sm">5min ago ⏱️</p>
                            </div>
                        </Link>
                    </li>
                    {/* Message-3  */}
                    <li>
                        <Link
                            to={"/messages"}
                            className="flex gap-4.5 border-t border-stroke px-4.5 py-5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <div className="h-12.5 2-12.5 rounded-full">
                                <FaUserSecret className="w-12 h-12" />
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">Robert Khan</h6>
                                <p className="text-sm">I can across you profile 👍</p>
                                <p className="text-sm">24hour ago ⏱️</p>
                            </div>
                        </Link>
                    </li>
                    {/* Message-4  */}
                    <li>
                        <Link
                            to={"/messages"}
                            className="flex gap-4.5 border-t border-stroke px-4.5 py-5 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <div className="h-12.5 2-12.5 rounded-full">
                                <FaUserSecret className="w-12 h-12" />
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-black dark:text-white">Gorse Mariya</h6>
                                <p className="text-sm">I like your confidence ❤️</p>
                                <p className="text-sm">2day ago</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}

export default DropdownMessage;