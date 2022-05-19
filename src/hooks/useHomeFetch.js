import {useEffect, useState, useRef} from "react";
import API from "../API";

const initialState = {
    is_success: true,
    message: "success",
    data: []

}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [error, setError] = useState(false);

    const getPopularArticles = async () => {
        try {
            setError(false);

            const popularArticles = await API.getPopularArticles()
            setState(prev => ({
                ...popularArticles,
                // results:
                //     page > 1 ? [...prev.results, ...popularArticles] : [...popularArticles]
            }))
        } catch (e) {
            setError(true);
        }
    };

    useEffect(() => {
        getPopularArticles()
    }, []);

    return {state, error}
};