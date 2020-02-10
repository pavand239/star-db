import React from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";
import ErrorBoundry from "../error-boundry";

export const Render = (props) => {
    let {item, field, label} = props;
    return(
        <tr>
            <th scope='row'>{label}</th>
            <td>{item[field]}</td>
        </tr>
    )

}
export class  ResourceDetail extends React.Component { 
    state = {
        _isMount:false,
        item:null,
        isLoading:true,
        error:false
    }
    onDataLoaded = (data) => {
        if(this.state._isMount) {
            this.setState({
                item:data,
                isLoading:false
            });
        }
    }
    onError = (err) => {
        this.setState({
            isLoading:false,
            error:true
        });
    }
    updateItem = (id) => {
        this.props.getData(id).then(this.onDataLoaded).catch(this.onError);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.itemId !== this.props.itemId){
            if (!prevState.isLoading) {
                this.setState({
                    isLoading:true,
                })
            }
            this.updateItem(this.props.itemId);    
        }
        
    }
    componentDidMount() {
        this.setState({
            _isMount:true
        });
    }
    componentWillUnmount() {
        this.setState({
            _isMount:false
        });
    }
    render() {
        let {isLoading, error, item} = this.state,
            {itemId} = this.props;
        if (itemId===null) {
            return <h4>Select item from list</h4>
        }
        if (isLoading && !error) {
            return <Spinner />;
        }
        if (error) {
            return <ErrorIndicator />
        }
        let {id, name, imageBaseUrl} = item;
        return(
            <ErrorBoundry>
                <div className='d-flex'>
                    <img src={`${imageBaseUrl}${id}.jpg`}  
                        className='rounded mr-lg-5 mr-3'  alt={name}/>
                    <div>
                        <h3>{name}</h3>
                        <table className='table table-hover'>
                            <tbody>
                                {React.Children.map(this.props.children, (child)=>(
                                    React.cloneElement(child, { item })
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ErrorBoundry>
            )
    }
}

