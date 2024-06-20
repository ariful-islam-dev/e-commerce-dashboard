import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import ECommerce from '../../pages/Dashboard/index';

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
                    <h2 className="text-3xl text-white">Logo</h2>
                </NavLink>
                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <FaBars className="w-20 h-18" />
                </button>
            </div>
            {/* Sidebar Header End */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* Sidebar Menu */}
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
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
                                        <>
                                            <NavLink to="/">Dashboard</NavLink>
                                            {/* Dropdown Menu */}
                                            <div>
                                                <ul>
                                                    <li>
                                                        <NavLink to="/">ECommerce</NavLink>
                                                    </li>
                                                </ul>
                                            </div>

                                        </>
                                    )
                                }
                                }
                            </SidebarLinkGroup>
                            {/* Menu Item Calendar  */}
                            <li>
                                <NavLink to="/calendar">Calendar</NavLink>
                            </li>
                            {/* Menu Item Profile  */}
                            <li>
                                <NavLink to="/profile">Profile</NavLink>
                            </li>
                            {/* Menu Item From */}
                            <SidebarLinkGroup
                                activeCondition={pathname === '/' || pathname.includes('from')}
                            >
                                {
                                    (handleClick, open) => {
                                        return (
                                            <>
                                                <NavLink to="/from">From</NavLink>
                                                <div>
                                                    <ul>
                                                        <li>Form Elements</li>
                                                        <li>Form Layout</li>
                                                    </ul>
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            </SidebarLinkGroup>
                            {/* Menu Item Tables */}
                            <li>
                                <NavLink to="/tables">Tables</NavLink>
                            </li>
                            {/* Menu Item Settings */}
                            <li>
                                <NavLink to="/settings">Settings</NavLink>
                            </li>
                            {/* Others Group */}
                            <div>
                                <h3>OTHERS</h3>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar;