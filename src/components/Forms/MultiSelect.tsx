import React, { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
interface Option {
    value: string;
    text: string;
    selected: boolean;
    element?: HTMLElement
}

interface DropdownProps {
    id: string
}
const MultiSelect: React.FC<DropdownProps> = ({ id }) => {

    const [options, setOptions] = useState<Option[]>([])
    const [selected, setSelected] = useState<number[]>([])
    const [show, setShow] = useState<boolean>(false);
    const dropdownRef = useRef<any>(null)
    const trigger = useRef<any>(null)

    useEffect(() => {
        const loadOption = () => {
            const select = document.getElementById(id) as HTMLSelectElement | null;

            if (select) {
                const newOptions: Option[] = [];

                for (let i = 0; i < select.options.length; i++) {
                    newOptions.push({
                        value: select.options[i].value,
                        text: select.options[i].innerText,
                        selected: select.options[i].hasAttribute('selected')
                    })
                }
                setOptions(newOptions)
            }
        };
        loadOption();
    }, [id]);

    const open = () => {
        setShow(true);
    }

    const isOpen = () => {
        return show === true;
    }

    const select = (index: number, event: React.MouseEvent) => {
        const newOptions = [...options];

        if (!newOptions[index].selected) {
            newOptions[index].selected = true;
            newOptions[index].element = event.currentTarget as HTMLElement;
            setSelected([...selected, index])
        } else {
            const selectedIndex = selected.indexOf(index);

            if (selectedIndex !== -1) {
                newOptions[index].selected = false;
                setSelected(selected.filter((i) => i !== index))
            }
        }

        setOptions(newOptions)
    }

    const remove = (index: number) => {
        const newOptions = [...options];
        const selectedIndex = selected.indexOf(index);

        if (selectedIndex !== -1) {
            newOptions[index].selected = false;
            setSelected(selected.filter((i) => i !== index));
            setOptions(newOptions)
        }
    }

    const selectedValues = () => {
        return selected.map((option) => options[option].value)
    }
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdownRef.current) return;
            if (!show || dropdownRef.current.contains(target) || trigger.current.contains(target)) {
                return;
            }
            setShow(false)
        }

        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler)
    })
    return (
        <div className='relative z-50'>
            <label htmlFor="" className='mb-3 block text-sm font-medium text-black dark:text-white'>Multiselect Dropdown</label>
            <div>
                <select name="" id={id} className="hidden">
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                    <option value="3">Option 4</option>
                    <option value="4">Option 5</option>
                </select>
                <div className="flex flex-col items-center">
                    <input type="hidden" name='value' defaultValue={"TODO"} />
                    <div className="relative z-20 inline-block w-full">
                        <div className="relative flex flex-col items-center">
                            <div className="w-full" ref={trigger} onClick={open}>
                                <div className="mb-2 flex rounded border border-stroke py-2 pl-3 pr-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input">
                                    <div className="flex flex-auto flex-wrap gap-3">
                                        {
                                            selected.map((index) => (
                                                <div key={index}
                                                    className='my-1.5 flex items-center justify-center rounded border-[.5px] border-stroke bg-gray px-2.5py-1.5 text-sm font-medium dark:border-strokedark dark:bg-white/30'
                                                >
                                                    <div className="max-w-full flex-initial">
                                                        {options[index].text}
                                                    </div>
                                                    <div className="flex flex-auto flex-row-reverse">
                                                        <div onClick={() => remove(index)} className="cursor-pointer pl-2 pr-1 hover:text-danger">
                                                            ❌
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        {
                                            selected.length === 0 && (
                                                <div className="flex-1">
                                                    <input placeholder='Select an option' className="h-full w-full appearance-none bg-transparent p-1 px-2 outline-none" defaultValue={selectedValues()} />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="flex w-8 items-center py-1 pl-1 pr-1">
                                        <button type="button" onClick={open} className='h-6 w-6 cursor-pointer outline-none focus:outline-none'>
                                            <FaAngleDown className='h-6 w-6' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4">
                                <div className={`max-h-select absolute top-full left-0 z-40 w-full overflow-y-auto rounded bg-white shadow dark:bg-form-input ${isOpen() ? "" : "hidden"
                                    }`}
                                    ref={dropdownRef}
                                    onFocus={() => setShow(true)}
                                    onBlur={() => setShow(false)}
                                >
                                    <div className="flex w-full flex-col">
                                        {
                                            options.map((option, index) => (
                                                <div key={index}>
                                                    <div
                                                        onClick={(event) => select(index, event)}
                                                        className="w-full cursor-pointer rounded-t border-b border-stroke hover:bg-primary/5 dark:border-form-strokedark">
                                                        <div className={`relative flex w-full items-center border-l-2 border-transparent p-2 pl-2 ${option.selected ? 'border-primary' : ''}`}>
                                                            <div className="flex w-full items-center">
                                                                <div className="mx-2 leading-6">
                                                                    {option.text}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiSelect;