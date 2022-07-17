import { useState, useEffect } from "react";

export function usePersist<T>(key: string, defaultValue: T): [T, (data: T) => void] {
    const [state, setState] = useState(
        localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || "") : defaultValue
    );

    useEffect(() => {
        if (!localStorage.getItem(key) && defaultValue) {
            localStorage.setItem(key, JSON.stringify(defaultValue));
        } else if (localStorage.getItem(key)) {
            setState(JSON.parse(localStorage.getItem(key) || ""));
        }
    }, [defaultValue]);

    function setValue(value: T) {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [state, setValue];
}
