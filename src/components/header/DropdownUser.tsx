import { useEffect, useRef, useState } from "react";
import { FaRegAddressBook, FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { Link } from "react-router-dom";


const DropdownUser = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

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
        <div className="relative">
            <Link to={"#"}
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
            >
                <span className="hidden text-right lg:block">
                    <span className="block text-sm font-medium text-black dark:text-white">Thomas Jhonson</span>
                    <span className="block text-xs">Developer</span>
                </span>
                <span className="w-12 h-12 rounded-full border-boxdark border-[0.5px] flex items-center justify-center">
                    <FaUser className="w-10 h-10" />
                </span>

                <IoIosArrowDown />
            </Link>

            {/* Dropdown Menu  */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${dropdownOpen === true ? 'block' : 'hidden'
                    }`}
            >
                <ul
                    className="flex flex-col gap-5 px-6 py-7.5 border-b border-stroke dark:border-strokedark"
                >
                    <li>
                        <Link to={"/profile"}
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary dark:hover:text-white lg:text-base"
                        >
                            <FaUser />
                            My Profile
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary dark:hover:text-white lg:text-base"
                        >
                            <FaRegAddressBook />
                            My Contact
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contact"}
                            className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary dark:hover:text-white lg:text-base"
                        >
                            <MdOutlineSettingsSuggest />
                            Account Setting
                        </Link>
                    </li>
                </ul>
                <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300  ease-in-out hover:text-primary lg:text-base">
                    <LuLogOut />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default DropdownUser;