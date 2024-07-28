import React, { ReactNode } from "react"
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
interface CardDataStatsProps {
    title: string,
    total: string,
    rate: string;
    levelUp?: boolean;
    levelDown?: boolean;
    children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({ title, total, rate, levelUp, levelDown, children }) => {
    return (
        <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                {children}
            </div>
            <div className="flex items-center justify-between mt-4">
                <div>
                    <h4 className="font-bold text-black text-title-md dark:text-white">{total}</h4>
                    <span className="text-sm font-medium">{title}</span>
                </div>
                <span className={`flex items-center gap-1 text-sm font-medium ${levelUp && 'text-meta-3'} ${levelDown && 'text-meta-5'}`}>
                    {rate}
                    {levelUp && <FaArrowUp />}
                    {levelDown && <FaArrowDown />}
                </span>
            </div>
        </div>
    )
};

export default CardDataStats;