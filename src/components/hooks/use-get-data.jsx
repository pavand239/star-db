import  { useState, useEffect, useMemo } from "react";

export const useGetData = (getData) => {
    const initialState = useMemo(() => ({
        item:null,
        isLoading:true,
        isError:false
    }),[]);
    const [dataState, setDataState] = useState(initialState);
    const onLoaded = (data) => setDataState({
                                                item:data,
                                                isLoading:false,
                                                isError:false
                                            });
    const onError = (err) => setDataState({
                                            item:null,
                                            isLoading:false,
                                            isError:true
                                        });
    useEffect(() => {
        setDataState(initialState);
        let cancelled = false;
        getData()
                .then(data => !cancelled && onLoaded(data))
                .catch(err => !cancelled && onError(err));
        return () => cancelled=true;
    },[getData, initialState])
    return dataState;
}