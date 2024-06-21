import useColorMode from "../../hooks/useColorMode";

const DarkModeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode()

    return (
        <li>
            <label
                className={`relative m-0 block h-7.5 w-14 rounded-full ${colorMode === 'dark' ? 'bg-primary' : 'bg-stroke'}`}
            >
                <input type="checkbox"
                    onChange={() => {
                        if (typeof setColorMode === 'function') {
                            setColorMode(colorMode === 'light' ? 'dark' : 'light')
                        }
                    }}
                    className="absolute top-0 z-50 w-full h-full m-0 opacity-0 cursor-pointer dur"
                />
                <span
                    className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${colorMode === 'dark' && '!right-[3px]'} !translate-x-full`}
                >
                    <span className="dark:hidden"></span>
                    <span className="hidden dark:inline-block"></span>
                </span>
            </label>
        </li>
    )

}

export default DarkModeSwitcher;