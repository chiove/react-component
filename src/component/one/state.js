import React from 'react';
import NoState from './no-state';
import axios from 'axios';

class Index extends React.Component {
    state = {
      list:[]
    }
    componentDidMount() {
      this.getData(3);
    }
    getData = (num) => {
      axios.get('http://localhost:4000/https://api.mlwei.com/wallpaper/api/?cid=new&start=0&count='+num).then(res => {
        if(res.data){
          this.setState({
            list:res.data.data
          })
        }
      })
    }
    render() {
      return (
        <div>
          <NoState text={this.state.list} onClickHandle={()=>{
              this.getData(4);
          }}/>
        </div>
      )
    }
  }

  export default Index;