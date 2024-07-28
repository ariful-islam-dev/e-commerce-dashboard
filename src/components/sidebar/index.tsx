import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft, FaRegUser, FaWpforms } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { TbBrandAirtable, TbSettingsCog, TbTableShare } from "react-icons/tb";
import { IoBarChartOutline } from "react-icons/io5";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}
const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const location = useLocation()
    const { pathname } = location;

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    )

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
                return;
            setSidebarOpen(false)
        }
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler)
    })

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false)
        }
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler)
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded')
        }
    }, [sidebarExpanded])
    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            {/* Sidebar Header Start */}
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
                <NavLink to={"/"}>
                    <h2 className="text-3xl text-white">Quick Dev</h2>
                </NavLink>
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <FaAngleDoubleLeft className="w-6 h-6 border-gray" />
                </button>
            </div>
            {/* Sidebar Header End */}

            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                {/* Sidebar Menu */}
                <nav className="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                            MENU
                        </h3>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            {/* Menu Item Dashboard */}
                            <SidebarLinkGroup
                                activeCondition={pathname === '/' || pathname.includes('dashboard')}
                            >
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <NavLink to="#"
                                                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/' || pathname.includes('dashboard')) && 'bg-graydark dark:bg-meta-4'}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                }
                                                }
                                            >
                                                <LuLayoutDashboard />
                                                Dashboard
                                                <span className="ml-auto">
                                                    {
                                                        !open ? <IoIosArrowDown className="w-6 h-6 text-bodydark1" /> : <IoIosArrowUp className="w-6 h-6 text-bodydark1" />
                                                    }
                                                </span>
                                            </NavLink>
                                            {/* Dropdown Menu */}
                                            <div
                                                className={`translate transform overflow-hidden ${!open && 'hidden'}`}
                                            >
                                                <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                    <li>
                                                        <NavLink to="/"
                                                            className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                        >ECommerce</NavLink>
                                                    </li>
                                                </ul>
                                            </div>

                                        </React.Fragment>
                                    )
                                }
                                }
                            </SidebarLinkGroup>
                            {/* Menu Item Calendar  */}
                            <li>
                                <NavLink to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/calendar') && 'bg-graydark dark:bg-meta-4'}`}
                                >
                                    <SlCalender />
                                    Calendar</NavLink>
                            </li>
                            {/* Menu Item Profile  */}
                            <li>
                                <NavLink to="/profile"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/profile') && 'bg-graydark dark:bg-meta-4'}`}
                                >
                                    <FaRegUser />
                                    Profile</NavLink>
                            </li>
                            {/* Menu Item From */}
                            <SidebarLinkGroup
                                activeCondition={pathname === '/form' || pathname.includes('form')}

                            >
                                {
                                    (handleClick, open) => {
                                        return (
                                            <>
                                                <NavLink to="/forms"
                                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/forms' || pathname.includes('forms')) && 'bg-graydark dark:bg-meta-4'}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                    }
                                                    }

                                                >
                                                    <FaWpforms />
                                                    From
                                                    <span className="ml-auto">
                                                        {
                                                            !open ? <IoIosArrowDown className="w-6 h-6 text-bodydark1" /> : <IoIosArrowUp className="w-6 h-6 text-bodydark1" />
                                                        }
                                                    </span>
                                                </NavLink>

                                                <div
                                                    className={`translate transform overflow-hidden ${!open && 'hidden'}`}
                                                >
                                                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                        <li>
                                                            <NavLink to="/forms/form-elements"
                                                                className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                            >Form Elements</NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/forms/form-layout"
                                                                className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                            >Form Layout</NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            </SidebarLinkGroup>
                            {/* Menu Item Tables */}
                            <li>
                                <NavLink to="/tables"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/tables' || pathname.includes('tables')) && 'bg-graydark dark:bg-meta-4'}`}

                                >
                                    <TbTableShare />
                                    Tables</NavLink>
                            </li>
                            {/* Menu Item Settings */}
                            <li>
                                <NavLink to="/settings"
                                    className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/settings' || pathname.includes('settings')) && 'bg-graydark dark:bg-meta-4'}`}

                                >
                                    <TbSettingsCog />
                                    Settings</NavLink>
                            </li>
                            {/* Others Group */}
                            <div>
                                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">OTHERS</h3>
                                <ul className="mb-6 flex flex-col gap-1.5">
                                    <li>
                                        <NavLink to="/chart"
                                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/chart' || pathname.includes('chart')) && 'bg-graydark dark:bg-meta-4'}`}

                                        >
                                            <IoBarChartOutline />
                                            Chart
                                        </NavLink>
                                    </li>
                                    <SidebarLinkGroup
                                        activeCondition={pathname === '/ui' || pathname.includes('ui')}
                                    >
                                        {(handleClick, open) => {
                                            return (
                                                <React.Fragment>
                                                    <NavLink to={"#"}
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/ui' || pathname.includes('ui')) && 'bg-graydark dark:bg-meta-4'}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                        }}
                                                    >
                                                        <TbBrandAirtable />
                                                        UI Elements
                                                        <span className="ml-auto">
                                                            {
                                                                !open ? <IoIosArrowDown className="w-6 h-6 text-bodydark1" /> : <IoIosArrowUp className="w-6 h-6 text-bodydark1" />
                                                            }
                                                        </span>
                                                    </NavLink>
                                                    {/* Dropdown of UI Elements */}
                                                    <div
                                                        className={`translate transform overflow-hidden ${!open && 'hidden'}`}
                                                    >
                                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                            <li>
                                                                <NavLink to="/ui/alerts"
                                                                    className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                                >
                                                                    Alerts
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/ui/buttons"
                                                                    className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                                >Buttons</NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        }
                                        }
                                    </SidebarLinkGroup>
                                    {/* Menu of Auth Page  */}
                                    <SidebarLinkGroup
                                        activeCondition={pathname === '/auth' || pathname.includes('auth')}
                                    >
                                        {(handleClick, open) => {
                                            return (
                                                <React.Fragment>
                                                    <NavLink to={"#"}
                                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === '/auth' || pathname.includes('auth')) && 'bg-graydark dark:bg-meta-4'}`}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                                                        }}
                                                    >
                                                        <LuLogOut />
                                                        Authentication
                                                        <span className="ml-auto">
                                                            {
                                                                !open ? <IoIosArrowDown className="w-6 h-6 text-bodydark1" /> : <IoIosArrowUp className="w-6 h-6 text-bodydark1" />
                                                            }
                                                        </span>
                                                    </NavLink>
                                                    <div className={`translate transform overflow-hidden ${!open && 'hidden'}`}>
                                                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                                            <li>
                                                                <NavLink to="/auth/signin"
                                                                    className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                                >Sign In</NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/auth/signup"
                                                                    className={({ isActive }) => 'group relative flex items-center rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' + (isActive && '!text-white')}
                                                                >
                                                                    Sign Up
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        }}
                                    </SidebarLinkGroup>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;