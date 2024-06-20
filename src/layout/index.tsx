import { ReactNode, useState } from "react";
import Sidebar from "../components/sidebar";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {/* ============= Page Wrapper Start=========== */}
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    {/* TODO:Header */}
                    <div>Header</div>
                    {/* ================Main Content Start================ */}
                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
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