import React from 'react';


class index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            a:11,
            hasError: false,
        }
    }

    //将弃用的三个周期
    // componentWillMount 在渲染前调用

    // componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。

    // componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。


    //在constructor后执行
    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps', props, state)
    //     return {b:'我是新增state'};
    //     // return null;
    // }

    // 在第一次渲染后调用
    // componentDidMount(){
    //     console.log('componentDidMount', this.props, this.state);
    // }

    //返回一个布尔值。在组件接收到新的props或者state时被调用
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate',nextProps, nextState);
    //     // return false;
    //     return true;
    // }


    // //在更新之前获取快照
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('getSnapshotBeforeUpdate', prevProps, prevState);
    //     return {c:'我是新增2state'};
    // }


    // 在组件完成更新后立即调用。在初始化时不会被调用
    // componentDidUpdate(prevProps, prevState, snapshot){
    //     console.log('componentDidUpdate', prevProps, prevState, snapshot);
    // }

    // 在组件从 DOM 中移除之前立刻被调用
    // componentWillUnmount(){
    //     console.log('componentWillUnmount',this.props,this.state);
    // }


      //错误处理 在渲染期间，生命周期方法或任何子组件的构造函数中发生错误时
    // static getDerivedStateFromError(error){
    //     console.log('getDerivedStateFromError',error);
    //     return { hasError: true };
    // }

    // componentDidCatch(){

    // }


    render(){
        return(
            <div>
                {this.props.test}
            </div>
        )
    }
}

export default index;