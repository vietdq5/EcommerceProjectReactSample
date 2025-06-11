import { useEffect, useState } from 'react';
import clientApi from '../utils/client-api';

const useDataHook = (apiLink, params, deps) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        clientApi
            .get(apiLink, params)
            .then(res => {
                setData(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message)
                setIsLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps || []);
    return { data, error, isLoading };
};
export default useDataHook;