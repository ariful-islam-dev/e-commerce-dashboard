import { FaEye } from "react-icons/fa";
import CardDataStats from "../../components/CardDataStats";
import ChartOne from "../../components/Charts/ChartOne";
import DefaultLayout from "../../layout";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiShoppingBag, FiUsers } from "react-icons/fi";
import ChartTwo from "../../components/Charts/ChartTwo";
import ChartThree from "../../components/Charts/ChartThree";
import MapOne from "../../components/Maps/MapOne";
import TableOne from "../../components/Tables/TableOne";
import ChatCard from "../../components/Chat/ChatCard";

const ECommerce: React.FC = () => {
    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {/* Card Data Stats Component-1  */}
                <CardDataStats title="Total Views" total="$3.456K" rate="0.43%" levelUp >
                    <FaEye />
                </CardDataStats>
                {/* Card Data Stats Component-2  */}
                <CardDataStats title="Total Profit" total="$45.2K" rate="4.35%" levelUp>
                    <MdOutlineShoppingCart />
                </CardDataStats>
                {/* Card Data Stats Component-3  */}
                <CardDataStats title="Total Product" total="2.450" rate={"2.59%"} levelUp>
                    <FiShoppingBag />
                </CardDataStats>
                {/* Card Data Stats Component-4  */}
                <CardDataStats title="Total Users" total="3.456" rate="0.95%" levelDown>
                    <FiUsers />
                </CardDataStats>
            </div>
            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                {/* Chart One  */}
                <ChartOne />
                {/* Chart Two */}
                <ChartTwo />
                {/* Chart Three */}
                <ChartThree />
                {/* Map One */}
                <MapOne />
                <div className="col-span-12 xl:col-span-8 ">
                    {/* Table One  */}
                    <TableOne />
                </div>
                {/* TODO:Chat Card  */}
                <ChatCard />
            </div>
        </DefaultLayout>
    )
}

export default ECommerce;