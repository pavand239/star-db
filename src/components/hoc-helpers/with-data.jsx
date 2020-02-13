import React, { useCallback } from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import { useGetData } from "../hooks";

export const withData = (Wrapped) => {
    return (props) => {
        const useGetList = () => {
            let getList = useCallback(()=>props.getData(),[]);
            return useGetData(getList);
        }
        let {isLoading, isError, data} = useGetList();
        console.log(data)
        if (isLoading && !isError) {
            return <Spinner />;
        }
        if (isError) {
            return <ErrorIndicator />
        }
        return <Wrapped {...props} data={data} />
    }
}
