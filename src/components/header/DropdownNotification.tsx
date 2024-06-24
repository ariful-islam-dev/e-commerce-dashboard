import { useEffect, useRef, useState } from "react"
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const DropdownNotification = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notifying, setNotifying] = useState(true);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) {
                return;
            }

            setDropdownOpen(false)
        }
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false)
        }
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler)
    })

    return (
        <li className="relative">
            <Link to={"#"}
                ref={trigger}
                onClick={() => {
                    setNotifying(false);
                    setDropdownOpen(!dropdownOpen)
                }}

                className={`relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white`}
            >
                <span
                    className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying === false ? 'hidden' : 'inline'}`}
                >
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 -z-1 animate-ping bg-meta-1"></span>
                </span>
                <FaRegBell />
            </Link>
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w80 ${dropdownOpen ? 'block' : 'hidden'}`}
            >
                <div
                    className="px-4 py-3"
                >
                    <h5 className="text-sm font-medium text-bodydark2">
                        Notification
                    </h5>
                </div>
                <ul className="flex flex-col h-auto overflow-y-auto">
                    <li>
                        <Link to={"#"}
                            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <p className="text-sm">
                                <span className="text-black dark:text-white">Edit your information in a swipe</span>
                                {" "}Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            </p>
                            <p className="text-xs">12 June, 2024</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}
                            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <p className="text-sm">
                                <span className="text-black dark:text-white">There are many variations</span>
                                {" "}of passages of Lorem Ipsum available, but the majority have suffered
                            </p>
                            <p className="text-xs">12 June, 2024</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}
                            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <p className="text-sm">
                                <span className="text-black dark:text-white">It is a log established face</span>
                                {" "} that a reader will be distracted by the readable.                            </p>
                            <p className="text-xs">12 June, 2024</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"#"}
                            className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                        >
                            <p className="text-sm">
                                <span className="text-black dark:text-white">Edit your information in a swipe</span>
                                {" "}Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            </p>
                            <p className="text-xs">12 June, 2024</p>
                        </Link>
                    </li>

                </ul>
            </div>
        </li>
    )
}

export default DropdownNotification;