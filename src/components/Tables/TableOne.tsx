import { BRAND } from "../../types/brand"

const tableHeading = ['Source', 'Visitors', 'Revenues', 'Sales', 'Conversion']
const brandData: BRAND[] = [
    {
        logo: '',
        name: 'Google',
        visitors: 3.5,
        revenues: '5,768',
        sales: 590,
        conversion: 4.8
    },
    {
        logo: '',
        name: 'Twitter',
        visitors: 2.2,
        revenues: '4,635',
        sales: 467,
        conversion: 4.3
    },
    {
        logo: '',
        name: 'Github',
        visitors: 2.1,
        revenues: '4,290',
        sales: 420,
        conversion: 3.7
    },
    {
        logo: '',
        name: 'Vimeo',
        visitors: 1.5,
        revenues: '3,580',
        sales: 389,
        conversion: 2.5
    },
    {
        logo: '',
        name: 'Facebook',
        visitors: 3.5,
        revenues: '6,768',
        sales: 390,
        conversion: 4.2
    },
]

const TableOne = () => {
    return (
        <div className="px-5 pt-6 pb-2 bg-white border rounded-sm border-stroke 5 shadow-default dark:bg-boxdark sm:px-7 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Top Channels
            </h4>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                    {
                        tableHeading.map((head, key) => (
                            <div className="p-2.5 xl:p-5 text-center" key={key}>
                                <h5 className="text-sm font-medium uppercase xsm:text-base">
                                    {head}
                                </h5>
                            </div>
                        ))
                    }
                </div>
                {
                    brandData.map((brand, key) => (
                        <div
                            className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"}`} key={key}
                        >
                            <div className="flex items-center gap-3 p-2.5 xl:p-5">
                                <div className="flex-shrink-0 border-2 rounded-full w-14 h-14 border-gray">
                                    <img src={brand.logo} alt="Brand" />
                                </div>
                                <p className="hidden text-black dark:text-white sm:block">
                                    {brand.name}
                                </p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{brand.visitors}K</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5">
                                <p className="text-meta-3">${brand.revenues}</p>
                            </div>
                            <div className="hidden  items-center justify-center sm:flex p-2.5 xl:p-5">
                                <p className="text-black dark:text-white">{brand.sales}</p>
                            </div>
                            <div className="hidden  items-center justify-center sm:flex p-2.5 xl:p-5">
                                <p className="text-meta-5">{brand.conversion}%</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TableOne