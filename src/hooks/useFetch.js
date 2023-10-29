import { useEffect, useState } from "react"

export const useFetch = (foo) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        foo();
        setIsLoading(false);
    }, [foo]);

    return {data, isLoading};
};