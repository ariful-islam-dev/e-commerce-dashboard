import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";

interface HeaderProps {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
    return (
        <header className="sticky top-0 flex w-full bg-white z-999 drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
            <div className="flex items-center justify-between flex-grow px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* Hamburger Toggle BTN */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                    >
                        <FaBars />
                    </button>
                    {/* LOGO  */}
                    <Link to={"/"} className="flex-shrink-0 block lg:hidden">
                        <h2>Quick Development</h2>
                    </Link>
                </div>
                {/* Search Box  */}
                <div className="hidden sm:block">
                    <form action="POST">
                        <div className="relative">
                            <button
                                className="absolute left-0 -translate-y-1/2 top-1/2"
                            >Search</button>
                            <input type="text" placeholder="Type to search..."
                                className="w-full pr-4 text-black bg-transparent pl-9 focus:outline-none dark:text-white xl:w-125"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex gap-2 item-center 2xsm:gap-4">
                        {/* TODO: Dark Mode  */}
                        <DarkModeSwitcher />
                        {/* TODO: Notification Menu */}
                        <DropdownNotification />
                        {/* TODO:Chat Notification */}

                    </ul>
                    {/* TODO:User */}
                </div>
            </div>
        </header>
    );
}

export default Header;