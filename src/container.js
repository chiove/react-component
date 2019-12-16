import React from 'react';
import axios from 'axios';
import Life from'./component/life';
import One from'./component/one/state';

import enhance from'./component/two/enhance';
import Student from'./component/two/student';
import Teacher from'./component/two/teacher';

import PropsEnhance from'./component/three/enhance';


const EnhancedComponent = enhance(Student,Teacher);

class index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            test:1,
        }
    }
    componentDidMount(){
        console.log(this.enhanceRef)
    }



    render(){
        return(
            <div>
                {/* 生命周期 */}
                {/* <Life
                    test={this.state.test}
                />
                <button onClick={()=>{
                  this.setState({test:2})
                }}>点击</button> */}


                {/* 容器组件和展示组件 */}
                {/* <One/> */}

                {/* 高阶组件 */}
                {/* <EnhancedComponent ref={(ref)=>this.enhanceRef=ref} a={'22'}/> */}

                <PropsEnhance>
                    {props => <Student a={props}/>}
                </PropsEnhance>

            </div>
        )
    }
}

export default index;