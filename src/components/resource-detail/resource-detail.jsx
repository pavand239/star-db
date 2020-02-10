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
        item:null,
        isLoading:true,
        error:false
    }
    onDataLoaded = (data) => {
        this.setState({
            item:data,
            isLoading:false
        });
    }
    onError = (err) => {
        this.setState({
            isLoading:false,
            error:true
        });
    }
    updateItem = (id) => {
        this.props.getData(this.props.itemId).then(this.onDataLoaded).catch(this.onError);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.itemId !== this.props.itemId
            && prevState.isLoading !== true) {
                this.setState({
                    isLoading:true,
                    item:null
                })
        }
        
        this.updateItem(this.props.itemId);
    }
    render() {
        let {isLoading, error, item} = this.state
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

