import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T)

function useLocalStorage<T>(
    key: string,
    initialValue: T
): [T, (value: SetValue<T>) => void] {
    // state to store our value
    // Pass initial state function to useState so logic is only executed once

    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.log(err)
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            // allow value to be a function so we have same API as useState
            const valueToStore = typeof storedValue === 'function' ? storedValue(storedValue) : storedValue
            // save state
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (err) {
            console.log(err)
        }

    }, [key, storedValue])
    return [storedValue, setStoredValue]
}

export default useLocalStorage;