import React from "react";
import ErrorIndicator from "../error-indicator";
import Spinner from "../spinner";

export const withData = (Wrapped) => {
    return class extends React.Component {
        state = {
            data:null,
            isLoading:true,
            error:false
        }
        onDataLoaded = (data) => {
            this.setState({
                data:data,
                isLoading:false
            });
        }
        onError = (err) => {
            this.setState({
                error:true
            });
        }
        componentDidMount() {
            this.props.getData().then(this.onDataLoaded).catch(this.onError);
        }
        render() {
            let {isLoading, error, data} = this.state
            if (isLoading && !error) {
                return <Spinner />;
            }
            if (error) {
                return <ErrorIndicator />
            }
            return <Wrapped {...this.props} data={data} />
        }
    }
}
