import React, { useState, useEffect } from "react";

import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";

export const Record = ({item, field, label}) => {
    return(
        <tr>
            <th scope='row'>{label}</th>
            <td>{item[field]}</td>
        </tr>
    )

}


export const  ResourceDetail = ({itemId, getData, children}) => { 
    const [_isMount, setIsMount] = useState(false),
          [item, setItem] = useState(1),
          [isLoading, setIsLoading] = useState(true),
          [isError, setIsError] = useState(false);
    

    const onDataLoaded = (data) => {
        setItem(data);
        setIsLoading(false);
    }
    const onError = (err) => {
        setIsLoading(false);
        setIsError(true);
        console.log(err);
    }
    const updateItem = (id) => {
        if(_isMount) {
            setIsLoading(true);
            setIsError(false);
            getData(id).then(onDataLoaded).catch(onError);
            console.log('update item');
        }
    }
    useEffect(()=>{
        setIsMount(true); console.log('mount');
        return () => {setIsMount(false); console.log('unmount');}
    },[]);
    useEffect(()=>{
        updateItem(itemId);
        console.log('update');
    }, [itemId]);
    // componentDidUpdate(prevProps, prevState) {
    //     let {itemId} = this.props; 
    //     if (prevProps.itemId !== itemId){
    //         if (!prevState.isLoading) {
    //             this.setState({
    //                 isLoading:true,
    //             })
    //         }
    //         this.updateItem(itemId);    
    //     }
        
    // }
    // componentDidMount() {
    //     this.setState({
    //         _isMount:true
    //     });
    // }
    // componentWillUnmount() {
    //     this.setState({
    //         _isMount:false
    //     });
    // }

    if (itemId===null) {
        return <h4>Select item from list</h4>
    }
    if (isLoading && !isError) {
        return <Spinner />;
    }
    if (isError) {
        return <ErrorIndicator />
    }
    let {id, name, imageBaseUrl} = item;
    return(
        <ErrorBoundry>
            <div className='d-flex'>
                <img src={`${imageBaseUrl}${id}.jpg`}  
                    className='rounded border border-secondary mr-lg-5 mr-3'  alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <table className='table table-hover'>
                        <tbody>
                            {React.Children.map(children, (child)=>(
                                React.cloneElement(child, { item })
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </ErrorBoundry>
    )
}

