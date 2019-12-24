import React from 'react';
import axios from 'axios';
import Test from'./component/life';
import One from'./component/one/state';

import enhance from'./component/two/enhance';
import Student from'./component/two/student';
import Teacher from'./component/two/teacher';

import PropsEnhance from'./component/three/enhance';

import Context from'./component/four/father';

import Tab from'./component/five/father';
import TabItem from'./component/five/child';


import Loading from'./component/loading/index';


const EnhancedComponent = enhance(Student,Teacher);

class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            test:1,
            visible:false
        }
    }
    componentDidMount(){
        console.log(this.enhanceRef);
    }



    render(){
        return(
            <div>
                {/* 测试 */}
               <Test/>

                {/* 容器组件和展示组件 */}
                {/* <One/> */}

                {/* 高阶组件 */}
                {/* <EnhancedComponent ref={(ref)=>this.enhanceRef=ref} a={'22'}/> */}

                {/* render Props 模式*/}
                {/* <PropsEnhance>
                    {props => <Student a={props}/>}
                </PropsEnhance> */}

                {/* Context 模式 */}
                {/* <Context/> */}


                {/* 组合组件 */}
                {/* <Tab>
                    <TabItem>你猜</TabItem>
                    <TabItem>2</TabItem>
                    <TabItem>你猜</TabItem>
                    <TabItem>2</TabItem>
                    <TabItem>rgdg</TabItem>
                    <TabItem>2</TabItem>
                </Tab> */}
                {/* <Loading text='你好你好你好你好你好你好你好你好你好你好···' loading={this.state.visible} color='red'/>
                <button onClick={()=>{
                      this.setState({visible:true});
                }}>点击</button> */}
            </div>
        )
    }
}

export default index;