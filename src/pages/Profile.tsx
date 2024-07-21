import DefaultLayout from "../layout";
import Breadcrumb from '../components/Breadcrumbs/index';
import userPhoto from '../images/arif.png'
import cover from '../images/cover.png'
import { Link } from 'react-router-dom';

const aboutData = [
    {
        name: 'Posts',
        quantity: "279"
    },
    {
        name: 'Followers',
        quantity: "129K"
    },
    {
        name: 'Following',
        quantity: '2K'
    }
]

const Profile = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="Profile" />
            <div className="overflow-hidden bg-white border rounded-sm border-stroke shadow-default dark:border-strokedar dark:bg-boxdark">
                <div className="relative z-20 h-35 md:h-65">
                    <img src={cover} alt="Profile Cover"
                        className="object-cover object-center w-full rounded-tl-sm rounded-tr-sm h-70"
                    />
                    <div className="absolute z-10 bottom-1 right-1 xsm:bottom-4 xsm:right-4">
                        <label htmlFor="cover" className="flex items-center justify-center gap-2 px-2 py-1 text-sm font-medium text-white rounded cursor-pointer bg-primary hover:bg-opacity-90 xsm:px-4">
                            <input type="file" className="sr-only" id="cover" />
                            <span></span>
                            <span>Edit</span>

                        </label>
                    </div>
                </div>
                <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11 5">
                    <div className="relative z-30 w-full p-1 mx-auto rounded-full -mt-22 h-30 max-w-30 bg-white/20 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                        <div className="relative drop-shadow-5">
                            <span className=" rounded-full items-center justify-center flex w-[100%] h-[150px]  overflow-hidden" >
                                <img src={userPhoto} alt="profile" />
                            </span>
                            <label htmlFor="profile" className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2">
                                {/* icon  */}
                                <input type="file" name="profile" id="profile" className="sr-only" />
                            </label>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="mb-1 text-2xl font-semibold text-black 5 dark:text-white">
                            Ariful Islam
                        </h3>
                        <p className="font-medium">FullStack Web Developer</p>
                        <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-2 dark:border-strokedar dark:bg-[#37404f">
                            {
                                aboutData.map((data, i) => (
                                    <div className="flex flex-col items-center justify-center gap-1 px-4 border-r border-stroke dark:border-strokedark xsm:flex-row" key={i}>
                                        <span className="font-semibold text-black dark:text-white">
                                            {data.quantity}
                                        </span>
                                        <span className="text-sm">{data.name}</span>
                                    </div>
                                ))
                            }

                        </div>
                        <h4 className="font-semibold text-black dark:text-white">
                            About Me
                        </h4>
                        <p className="mt-4.5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime fugiat ex voluptate sint autem atque. Dicta delectus vel cum explicabo alias ea quaerat, impedit deserunt recusandae beatae sunt placeat consequatur nemo consequuntur quia cumque vitae, consectetur perferendis doloremque quo eum maiores vero natus assumenda! Deleniti est in quae accusamus?
                        </p>
                    </div>
                    <div className="mt-6.5">
                        <h4 className="mb-3.5 font-medium text-black dark:text-white">
                            Follow me on
                        </h4>
                        <div className="flex items-center justify-center gap-3 5">
                            <Link to={'#'} className="hover:text-primary" aria-label="social-icon">
                                {/* Facebook icon  */}
                                Fb
                            </Link>
                            <Link to={'#'} className="hover:text-primary" aria-label="social-icon">
                                {/* Facebook icon  */}
                                Tw
                            </Link>
                            <Link to={'#'} className="hover:text-primary" aria-label="social-icon">
                                {/* Facebook icon  */}
                                Ln
                            </Link>
                            <Link to={'#'} className="hover:text-primary" aria-label="social-icon">
                                {/* Facebook icon  */}
                                Dr
                            </Link>
                            <Link to={'#'} className="hover:text-primary" aria-label="social-icon">
                                {/* Facebook icon  */}
                                Gh
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Profile;