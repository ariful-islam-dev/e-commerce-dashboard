import Breadcrumb from "../components/Breadcrumbs";
import DefaultLayout from "../layout";

const tableHeading = [
    {
        name: 'Sunday',
        short: 'Sun'
    },
    {
        name: 'Monday',
        short: 'Mon'
    },
    {
        name: 'Tuesday',
        short: 'Tue'
    },
    {
        name: 'Wednesday',
        short: 'Wed'
    },
    {
        name: 'Thursday',
        short: 'Thu'
    },
    {
        name: 'Friday',
        short: 'Fri'
    }, {
        name: 'Saturday',
        short: 'Sat'
    },
]
const dates = [
    {
        name: 1,
        event: {
            name: 'Redesign Website',
            date: "1 Dec - 2 Dec"
        }
    },
    {
        name: 2,
        event: {}
    },
    {
        name: 3,
        event: {}
    },
    {
        name: 4,
        event: {}
    },
    {
        name: 5,
        event: {}
    },
    {
        name: 6,
        event: {}
    },
    {
        name: 7,
        event: {}
    },
    {
        name: 8,
        event: {

        }
    },
    {
        name: 9,
        event: {}
    },
    {
        name: 10,
        event: {
            name: 'Redesign Website',
            date: "1 Dec - 2 Dec"
        }
    },
    {
        name: 11,
        event: {}
    },
    {
        name: 12,
        event: {}
    },
    {
        name: 13,
        event: {}
    },
    {
        name: 14,
        event: {}
    }, {
        name: 15,
        event: {

        }
    },
    {
        name: 16,
        event: {}
    },
    {
        name: 17,
        event: {}
    },
    {
        name: 18,
        event: {}
    },
    {
        name: 19,
        event: {}
    },
    {
        name: 20,
        event: {}
    },
    {
        name: 21,
        event: {}
    },
    {
        name: 22,
        event: {

        }
    },
    {
        name: 23,
        event: {}
    },
    {
        name: 24,
        event: {}
    },
    {
        name: 25,
        event: {}
    },
    {
        name: 26,
        event: {}
    },
    {
        name: 27,
        event: {
            name: 'App Design',
            date: "27 Dec - 30 Dec"
        }
    },
    {
        name: 28,
        event: {}
    }, {
        name: 29,
        event: {}
    },
    {
        name: 30,
        event: {}
    },
    {
        name: 31,
        event: {}
    },
]

// const dates = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
// ]


const Calender = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Calender" />
            {/* Calendar Section Start  */}
            <div className="w-full max-w-full bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                <table className="w-full">
                    <thead>
                        <tr className="grid grid-cols-7 text-white rounded-t-sm bg-primary">
                            {
                                tableHeading.map((day, key) => (
                                    <th className="flex items-center justify-center p-1 text-xs font-semibold rounded h-15 tl-sm sm:text-base xl:p-5" key={key}>
                                        <span className="hidden lg:block">{day.name}</span>
                                        <span className="block lg:hidden">{day.short}</span>
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            <tr className="grid grid-cols-7">
                                {
                                    dates.map((date, key) => (
                                        <td className="relative h-20 p-2 transition duration-500 border cursor-pointer ease border-stroke hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31" key={key}>
                                            <span className="font-medium text-black dark:text-white">
                                                {date.name}
                                            </span>
                                            {
                                                date.event.name && (
                                                    <div className="flex-grow w-full h-16 py-1 cursor-pointer group md:h-30">
                                                        <span className="group-hover:text-primary md:hidden">More</span>
                                                        <div className="event invisible absolute left-2 z-99 mb-1 flex w-[200%] flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:w-[190%] md:opacity-100">
                                                            <span className="text-sm font-semibold text-black event-name dark:text-white">
                                                                {date.event.name}
                                                            </span>
                                                            <span className="text-sm font-medium text-black time dark:text-white">
                                                                {date.event.date}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
};

export default Calender;