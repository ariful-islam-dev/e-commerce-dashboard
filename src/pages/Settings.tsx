import React from 'react';
import DefaultLayout from '../layout';
import Breadcrumb from '../components/Breadcrumbs';
import { FaEdit, FaEnvelope, FaPhone, FaUser, FaUserAlt } from 'react-icons/fa';
import Field from '../components/Settings/Field';
import user from '../images/arif.png'

const formfields = {
    name: {
        title: 'Full Name',
        type: 'text',
        id: 'fullName',
        placeHolder: 'Devid Jhon',
        icon: <FaUser />
    },
    phone: {
        title: 'Phone Number',
        type: 'text',
        id: 'phoneNumber',
        placeHolder: '+88 017XX-XXXXXX',
        icon: <FaPhone />
    },
    email: {
        title: 'Email Address',
        type: 'email',
        id: 'emailAddress',
        placeHolder: 'ar@info.com',
        icon: <FaEnvelope />
    },
    user: {
        title: 'Username',
        type: 'text',
        id: 'userName',
        placeHolder: 'devidjhoneXX',
        icon: <FaUserAlt />
    }, bio: {
        title: 'BIO',
        type: 'text',
        id: 'bioComment',
        placeHolder: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloribus, libero quod quaerat cupiditate beatae? Voluptas explicabo expedita quos sint, aut assumenda sequi inventore laborum eveniet exercitationem totam, eum repudiandae recusandae quidem magnam ut et soluta dolorem beatae enim vero consequuntur eos unde! Facere repudiandae laudantium explicabo, soluta debitis labore.',
        icon: <FaEdit />
    },
}

const Settings = () => {
    const fields = Object.values(formfields)


    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName='Settings' />
                <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-5 xl:col-span-3">
                        <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strodedark dark:bg-boxdark">
                            <div className="py-4 border-b border-stroke px-7 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">
                                    Personal Information
                                </h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                    <div className="mb-5.5 flex-col flex gap-5.5 sm:flex-row">

                                        {
                                            fields.map((field, key) => {
                                                return (field.id === 'fullName' || field.id === 'phoneNumber') &&
                                                    (
                                                        <div className="w-full sm:w-1/2" key={key}>
                                                            <Field icon={field.icon} id={field.id} placeHolder={field.placeHolder} title={field.title} type={field.type} />
                                                        </div>
                                                    )

                                            })
                                        }

                                    </div>
                                    {
                                        fields.map((field, key) => {
                                            return (field.id === 'emailAddress' || field.id === 'userName') &&
                                                (
                                                    <div className='mb-5.5' key={key}>
                                                        <Field icon={field.icon} id={field.id} placeHolder={field.placeHolder} title={field.title} type={field.type} />
                                                    </div>
                                                )

                                                ||
                                                (field.id === 'bioComment') &&
                                                (
                                                    <div className="mb-5.5" key={key}>
                                                        <label htmlFor={field.id}>
                                                            {field.title}
                                                        </label>
                                                        <div className="relative">
                                                            <span className='absolute left-4.5 top-4'>
                                                                {field.icon}
                                                            </span>
                                                            <textarea
                                                                className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus-border-primary'
                                                                name={field.id}
                                                                id={field.id}
                                                                rows={6}
                                                                placeholder={field.placeHolder}
                                                            >

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                )

                                        })
                                    }
                                    <div className="flex justify-end gap-4.5">
                                        <button className="flex justify-center px-6 py-2 font-medium text-black border rounded border-stroke hover:shadow-1 dark:border-strokedark dark:text-white"
                                            type='submit'
                                        >
                                            Cancel
                                        </button>
                                        <button className="flex justify-center px-6 py-2 font-medium rounded bg-primary text-gray border-stroke hover:bg-opacity-90"
                                            type='submit'
                                        >
                                            Save
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 xl:col-span-2">
                        <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="py-4 border-b border-stroke px-7 dark:border-strokedark">
                                <h3 className="font-medium text-black dark:text-white">Your Photo</h3>
                            </div>
                            <div className="p-7">
                                <form action="#">
                                    <div className="flex items-center h-12 gap-3 mb-10 ">
                                        <div className="h-12 rounded-full w-14">
                                            <img src={user} alt="User" className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <span className="mb-1 text-black 5 dark:text-white">
                                                Edit your photo
                                            </span>
                                            <span className="flex gap-2.5">
                                                <button className="text-sm hover:text-primary">Delete</button>
                                                <button className="text-sm hover:text-primary">Update</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="fileUpload" className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                                        <input type="file" name="" accept='image/*'
                                            className='absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer'
                                        />
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <span className="flex items-center justify-center w-10 h-10 bg-white border rounded-full border-stroke dark:border-strokedark dark:bg-boxdark">
                                                <FaEnvelope />
                                            </span>
                                            <p>
                                                <span className="text-primary">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                                            <p>(max, 800 X 800px)</p>
                                        </div>

                                    </div>
                                    <div className="flex justify-end gap-4.5">
                                        <button className="flex justify-center px-6 py-2 font-medium text-black border rounded border-stroke hover:shadow-1 dark:border-strokedark dark:text-white"
                                            type='submit'
                                        >
                                            Cancel
                                        </button>
                                        <button className="flex justify-center px-6 py-2 font-medium rounded bg-primary text-gray border-stroke hover:bg-opacity-90"
                                            type='submit'
                                        >
                                            Save
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Settings;