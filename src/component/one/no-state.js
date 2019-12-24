import React from 'react';
 class Index extends React.Component {
    render() {
        const {onClickHandle} = this.props;
      return (
        <div>
              {this.props.text.map((item,index)=>(
                <img key={index} src={item.url} alt="" style={{width:120,height:100}}/>
              ))}
              <button onClick={()=>{
                onClickHandle && onClickHandle()
              }}>获取</button>
        </div>
      )
    }
  }

  export default Index;