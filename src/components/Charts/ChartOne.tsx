import { ApexOptions } from "apexcharts"
import { useState } from "react"
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left'
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
        fontFamily: '"Inter", sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1
        },
        toolbar: {
            show: false
        }
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300
                }
            }
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350
                }
            }
        },
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight'
    },
    grid: {
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: true
            }
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 4,
        colors: "#fff",
        strokeColors: ['#3056D3', '#80CAEE'],
        strokeWidth: 3,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        }
    },
    xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        }
    },
    yaxis: {
        title: {
            style: {
                fontSize: '0px'
            },
        },
        min: 0,
        max: 100
    },
}

interface ChartOneState {
    series: {
        name: string;
        data: number[]
    }[]
}
const ChartOne: React.FC = () => {
    const [state, setState] = useState<ChartOneState>({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45]
            },
            {
                name: 'Product Two',
                data: [30, 24, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51]
            }
        ]
    });

    const handleReset = () => {
        setState((prevState) => ({
            ...prevState
        }));
    }

    handleReset;
    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
            <div className="flex flex-wrap items-start justify-between gap-3 gap-y-3 sm:flex-nowrap">
                <div className="flex flex-wrap w-full gap-3 sm:gap-5">
                    <div className="flex min-w-47.5">
                        <span className="flex items-center justify-center w-full h-4 mt-1 border rounded-full rm-2 max-w-4 border-primary">
                            <div className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></div>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-primary"> Total Revenue</p>
                            <p className="text-sm font-medium">16-08-2023 - 12.05.2024</p>
                        </div>
                    </div>
                    <div className="flex min-w-47.5">
                        <span className="flex items-center justify-center w-full h-4 mt-1 mr-2 border rounded-full max-w-4 border-secondary">
                            <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
                        </span>
                        <div className="w-full">
                            <p className="font-semibold text-secondary">Total Sales</p>
                            <p className="text-sm font-medium">16-08-2023 - 12.05.2024</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end w-full max-w-45">
                    <div className="inline-flex items-center rounded- bg-whiter p-1.5 dark:bg-meta-4">
                        <button className="px-3 py-1 font-medium text-black bg-white rounded text-sx shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark">Day</button>
                        <button className="px-3 py-1 font-medium text-black rounded text-sx shadow-card hover:shadow-card dark:text-white dark:hover:bg-boxdark hover:bg-white" >Week</button>
                        <button className="px-3 py-1 font-medium text-black rounded text-sx shadow-card hover:shadow-card dark:text-white dark:hover:bg-boxdark hover:bg-white">Month</button>
                    </div>
                </div>

            </div>
            <div>
                <div id="chartOne" className="-ml-5">
                    <ReactApexChart
                        options={options}
                        series={state.series}
                        type="area"
                        height={350}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChartOne;