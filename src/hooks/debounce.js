import { useEffect, useState } from "react";

export function useDebounce(value, delay = 1000) {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebounced(value), delay)
        
        return () => clearTimeout(handler);
    }, [value, delay])

    return debounced;
}