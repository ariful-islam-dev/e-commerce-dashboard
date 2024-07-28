import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartThreeState {
    series: number[];
}

const options: ApexOptions = {
    chart: {
        fontFamily: 'Arial, sans-serif',
        type: 'donut'
    },
    colors: ['#3c50e0', '#6577f3', '#8fd0ef', '#0fadcf'],
    labels: ['Desktop', 'Tablet', 'Mobile', 'Unknown'],
    legend: {
        show: false,
        position: 'bottom'
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent'
            }
        }
    },

    dataLabels: {
        enabled: false
    },
    responsive: [
        {
            breakpoint: 2600,
            options: {
                chart: {
                    width: 380
                }
            }
        },
        {
            breakpoint: 640,
            options: {
                chart: {
                    width: 200
                }
            }
        }
    ]
}

// data
const visitors = [
    {
        device: 'Desktop',
        percent: '65%',
        background: 'primary'
    },
    {
        device: 'Tablet',
        percent: '34%',
        background: '#6577f3'
    },
    {
        device: 'Mobile',
        percent: '45%',
        background: '#8fd0ef'
    },
    {
        device: 'Unknown',
        percent: '12%',
        background: '#0fadcf'
    },
]


// Component
const ChartThree: React.FC = () => {
    const [state, setState] = useState<ChartThreeState>({ series: [65, 34, 12, 56] })

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState,
            series: [65, 34, 12, 56]
        }))
    }

    handleReset;

    return (
        <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
            <div className="mb-3 justify-between gap-4 sm:flex">
                <div>
                    <h5 className="text-xl font-semibold text-black dark:text-white">
                        Visitors Analytics
                    </h5>
                </div>
                <div >
                    <div className="relative z-20 inline-block">
                        <select name="" id="" className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none">
                            <option value="" className="dark:bg-boxdark">Monthly</option>
                            <option value="" className="dark:bg-boxdark">Yearly</option>
                        </select>
                        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2"></span>
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div id="chartThree" className="mx-auto flex justify-center">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="donut"
                    />
                </div>
            </div>
            <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
                {
                    visitors.map((visitor, key) => (
                        <div className="sm:w-1/2 w-full px-8" key={key}>
                            <div className="flex w-full items-center">
                                <span className={`mr-2 block h-3 w-full max-w-3 rounded-full bg-${visitor.device === 'Desktop' ? 'primary' : `[${visitor.background}]`}`}></span>
                                <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
                                    <span>{visitor.device}</span>
                                    <span>{visitor.percent}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ChartThree