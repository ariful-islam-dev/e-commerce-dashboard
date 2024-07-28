import { ReactNode, useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {/* ============= Page Wrapper Start=========== */}
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
                    {/* ================Header================ */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* ================Main Content Start================ */}
                    <main>
                        <div className="p-4 mx-auto max-w-screen-2xl md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* ================Main Content End================ */}
                </div>
            </div>
            {/* ============= Page Wrapper End=========== */}
        </div>
    )

}

export default DefaultLayout;