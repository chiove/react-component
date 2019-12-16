import React from 'react';


class index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            a:11,
            hasError: false,
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps', props, state)
    //     return {b:'我是新增state'};
    //     // return null;
    // }

    // static getDerivedStateFromError(error){
    //     console.log('getDerivedStateFromError',error);
    //     return { hasError: true };
    // }


    // componentDidMount(){
    //     console.log('componentDidMount', this.props, this.state);
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate',nextProps, nextState);
    //     // return false;
    //     return true;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    //     return {c:'我是新增2state'};
    // }

    // componentDidUpdate(prevProps, prevState, snapshot){
    //     console.log('componentDidUpdate', prevProps, prevState, snapshot);
    // }

    // componentWillUnmount(){
    //     console.log('componentWillUnmount',this.props,this.state);
    // }

    render(){
        return(
            <div>
                生命周期
            </div>
        )
    }
}

export default index;