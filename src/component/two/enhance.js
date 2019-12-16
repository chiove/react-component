import React from 'react';

const Index = (Student, Teacher) => {
  const newComponent = (props) => {
    // 判断条件
    let isStudent = Math.random() > 0.5 ? true : false;
    if(isStudent){
      return Student;
    }else{
      return Teacher;
    }
  }
  return newComponent();
}

  export default Index;