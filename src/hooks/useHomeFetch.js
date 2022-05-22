import {useEffect, useState, useRef} from "react";
import API from "../API";
import axios from "axios";
import {BASE_URL} from "../config";

const initialState = {
    is_success: true,
    message: "success",
    data: []

}

const searchTermInitialState = {
    term: '',
    level: '',
    expertises: ''
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState(searchTermInitialState);
    const [popularArticles, setPopularArticles] = useState(initialState);
    const [articles, setArticles] = useState(initialState);
    const [expertises, setExpertises] = useState(initialState);
    const [levels, setLevels] = useState(initialState);
    const [error, setError] = useState(false);

    const getPopularArticles = async () => {
        try {
            setError(false);
            axios.get(`${BASE_URL}api/v1/article/popular`).then((response) => {
                setPopularArticles(response.data)
            })
        } catch (e) {
            setError(true);
        }
    };

    const getArticles = async (searchTerm) => {
        let filteringString = ''

        if (searchTerm.level !== "") {
            filteringString += 'level=' + searchTerm.level + '&'
        }
        if (searchTerm.expertises !== "") {
            filteringString += 'expertises=' + searchTerm.expertises + '&'
        }
        if (searchTerm.term !== "") {
            filteringString += 'term=' + searchTerm.term + '/'
        }

        try {
            setError(false)
            axios.get(`${BASE_URL}api/v1/article${filteringString !== '' ? '?' + filteringString : ''}`).then((response) => {
                setArticles(response.data)
            })
        } catch (e) {
            setError(true)
        }
    };

    const getExpertises = async () => {
        try {
            setError(false)
            axios.get(`${BASE_URL}expertises`).then((response) => {
                setExpertises(response.data)
            })
        } catch (e) {
            setError(true)
        }
    };

    const getLevels = async () => {
        try {
            setError(false)
            axios.get(`${BASE_URL}levels`).then((response) => {
                setLevels(response.data)
            })
        } catch (e) {
            setError(true)
        }
    };

    useEffect(() => {
        getPopularArticles()
    }, []);

    useEffect(() => {
        setArticles(initialState)
        getArticles(searchTerm)
    }, [searchTerm]);

    useEffect(() => {
        getExpertises()
    }, []);

    useEffect(() => {
        getLevels()
    }, []);

    return {popularArticles, articles, expertises, levels, error, setSearchTerm}
};