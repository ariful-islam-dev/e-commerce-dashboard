import { useEffect, useRef, useState } from "react"
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
            </Link>
        </li>
    )
}

export default DropdownNotification;