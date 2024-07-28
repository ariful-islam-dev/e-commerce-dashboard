import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
    colors: ['#3c50e0', '#80caee'],
    chart: {
        fontFamily: 'arial, sans-serif',
        type: 'bar',
        height: 335,
        stacked: true,
        toolbar: {
            show: false,
        }, zoom: {
            enabled: false
        }
    },
    responsive: [
        {
            breakpoint: 1536,
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        columnWidth: '25%'
                    }
                }
            }
        }
    ],
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 0,
            columnWidth: '25%',
            borderRadiusApplication: 'end',
            borderRadiusWhenStacked: 'last'
        }
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        fontFamily: 'Tahoma',
        fontWeight: 500,
        fontSize: '14px',
        markers: {
            radius: 99
        }
    },
    fill: {
        opacity: 1
    }
};

interface ChartTwoState {
    series: {
        name: string,
        data: number[],
    }[];
}

const ChartTwo: React.FC = () => {
    const [state, setState] = useState<ChartTwoState>({
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 65]
            }, {
                name: 'Revenue',
                data: [13, 23, 20, 8, 13, 27, 15]
            }
        ]
    })

    const handleReset = () =>
        setState(prev => ({
            ...prev
        }))

    handleReset;

    return (
        <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
            <div className="mb-4 justify-between gap-4 sm:flex">
                <div>
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        Profit this week
                    </h4>
                </div>
                <div>
                    <div className="relative z-20 inline-block">
                        <select name="#" id="#"
                            className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
                        >
                            <option value="" className="dark:bg-boxdark">This Week</option>
                            <option value="" className="dark:bg-boxdark">Last Week</option>
                        </select>
                        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">

                        </span>
                    </div>
                </div>
            </div>
            <div id="chartTwo" className="-ml-5 -mb-9">
                <ReactApexChart
                    options={options}
                    series={state.series}
                    type="bar"
                    height={360}
                />
            </div>
        </div>
    )
}

export default ChartTwo