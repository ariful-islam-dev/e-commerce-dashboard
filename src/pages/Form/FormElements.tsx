
import DefaultLayout from '../../layout';
import Breadcrumb from '../../components/Breadcrumbs';
import SwitcherOne from '../../components/Switchers/SwitcherOne';
import SwitcherTwo from '../../components/Switchers/SwitcherTwo';
import SwitcherThree from '../../components/Switchers/SwitcherThree';
import SwitcherFour from '../../components/Switchers/SwitcherFour';
import DatePickerOne from '../../components/Forms/DatePicker/DatePickerOne';
import DatePickerTwo from '../../components/Forms/DatePicker/DatePickerTwo';
import CheckboxOne from '../../components/Checkboxes/CheckboxOne';
import CheckboxTwo from '../../components/Checkboxes/CheckboxTwo';
import CheckboxThree from '../../components/Checkboxes/CheckboxThree';
import CheckboxFour from '../../components/Checkboxes/CheckboxFour';
import CheckboxFive from '../../components/Checkboxes/CheckboxFive';
import SelectGroupTwo from '../../components/Forms/SelectGroup/SelectGroupTwo';
import MultiSelect from '../../components/Forms/MultiSelect';

const FormElements = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName='Form Elements' />

            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* Input Fields  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Input Fields
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="block mb-3 text-black dark:text-white">
                                    Default Input
                                </label>
                                <input type="text" placeholder='Default Input'
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                            <div>
                                <label className="block mb-3 text-black dark:text-white">
                                    Active Input
                                </label>
                                <input type="text" placeholder='Active Input'
                                    className='w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-t-primary  active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                            <div>
                                <label className="block mb-3 text-black dark:text-white">
                                    Disabled Label
                                </label>
                                <input type="text" placeholder='Disabled Label' disabled
                                    className='w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-t-primary  active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary'
                                />
                            </div>
                        </div>
                    </div>
                    {/* Toggle Switch Input  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Toggle Switch Input
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <SwitcherOne />
                            <SwitcherTwo />
                            <SwitcherThree />
                            <SwitcherFour />
                        </div>
                    </div>
                    {/* Time and Date  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Time and date
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <DatePickerOne />
                            <DatePickerTwo />
                        </div>
                    </div>
                    {/* file Upload  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                File Upload
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="block mb-3 text-black dark:text-white">Attach File</label>
                                <input type="file"
                                    className='w-full transition bg-transparent border rounded-lg outline-none cursor-pointer border-stroke file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-whiter/30 dark:file:text-white dark:focus:border-primary'
                                />
                            </div>
                            <div>
                                <label className="block mb-3 text-black dark:text-white">Attach File</label>
                                <input type="file"
                                    className='w-full border rounded-lg p-3 file:rounded  border-stroke  outline-none transition file:mr-4 file:border-[0.5px] file:border-rounded file:border-stroke file:bg-[#eeeeee] file:py-1 file:px-2.5  focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-whiter/30 dark:file:text-white '
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-9">
                    {/* Text Area Fields  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Textarea Fields
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label className="block mb-3 text-black dark:text-white">Default textarea</label>
                                <textarea rows={6} placeholder='Default textarea' className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"></textarea>
                            </div>

                            <div>
                                <label className="block mb-3 text-black dark:text-white">Active textarea</label>
                                <textarea rows={6} placeholder='Active textarea' className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:text-white"></textarea>
                            </div>
                            <div>
                                <label className="block mb-3 text-black dark:text-white">Disabled textarea</label>
                                <textarea disabled rows={6} placeholder='Disabled textarea' className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:text-white"></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Checkbox and radio  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Checkbox and Radio
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <CheckboxOne />
                            <CheckboxTwo />
                            <CheckboxThree />
                            <CheckboxFour />
                            <CheckboxFive />
                        </div>
                    </div>
                    {/* Select Input  */}
                    <div className="bg-white border rounded-sm border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Select Input
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <SelectGroupTwo />
                            <MultiSelect id="multiSelect" />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout >
    );
};

export default FormElements;