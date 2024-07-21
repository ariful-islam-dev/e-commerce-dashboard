import { FaDeleteLeft } from "react-icons/fa6";
import { Package } from "../../types/package";
import { FaDownload, FaEye } from "react-icons/fa";

const packageData: Package[] = [
    {
        name: 'Free Package',
        price: 0.0,
        invoiceDate: 'Jun 10, 2024',
        status: "Paid"
    },
    {
        name: 'Standard Package',
        price: 59.0,
        invoiceDate: 'Jun 10, 2024',
        status: "Paid"
    },
    {
        name: 'Business Package',
        price: 99.0,
        invoiceDate: 'Jun 10, 2024',
        status: "Unpaid"
    },
    {
        name: 'Standard Package',
        price: 99.0,
        invoiceDate: 'Jun 10, 2024',
        status: "Pending"
    },
];

const heading = [
    "Package",
    "Price",
    "Invoice date",
    "Status",
    "Action"
]

const TableThree = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="text-left bg-gray-2 dark:bg-meta-4">
                            {
                                heading.map((item, key) => (
                                    <th className={`px-4 py-4 font-medium text-black dark:text-white ${key === 0 && 'pl-9'}`} key={key}>
                                        {item}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {
                            packageData.map((pack, idx) => (
                                <tr key={idx} className="">
                                    <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11 dark:border-strokedark">
                                        <h5 className="font-medium text-black dark:text-white">{pack.name}</h5>
                                    </td>
                                    <td className="  border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p className="text-sm">${pack.price}</p>
                                    </td>
                                    <td className=" border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <p className="text-sm">{pack.invoiceDate}</p>
                                    </td>
                                    <td className={"border-b border-[#eee] py-5 px-4 dark:border-strokedark"}>
                                        <p className={` inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${pack.status === 'Paid'
                                            ? 'bg-success text-success'
                                            : pack.status === 'Unpaid'
                                                ? 'bg-danger text-danger'
                                                : 'bg-warning text-warning'
                                            }`}>{pack.status}</p>
                                    </td>
                                    <td className=" border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                        <div className="flex items-center space-x-3.5">
                                            <button className="hover:text-primary">
                                                <FaEye />
                                            </button><button className="hover:text-primary">
                                                <FaDeleteLeft />
                                            </button>
                                            <button className="hover:text-primary">
                                                <FaDownload />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableThree;