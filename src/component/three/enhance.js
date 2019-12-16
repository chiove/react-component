import React from 'react';

const Index = (props) => {
  const newComponent = () => {
    // 判断条件
    let isStudent = Math.random() > 0.5 ? true : false;
    let allProps = {};
    if(isStudent){
      allProps = {a:'大',...props}
    }else{
      allProps = {a:'小',...props}
    }
    return <props.children {...allProps}/>;
  }
  return newComponent();
}

  export default Index;