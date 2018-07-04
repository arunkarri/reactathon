import React, { Component } from 'react';
import ReactD3,{BarChart} from 'react-d3-components';
// import React.render from 'react-dom';
import {PieChart} from 'react-easy-chart';

class Chart extends Component {
constructor(){
    super();
    this.state={data:[],styles: {}}
 };

componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]
    
    var data=[
        { key: 'Submitted', value: 100, color: '#1f77b4' },
        { key: 'Not Submitted', value: 200, color: '#ff7f0e' }
      ];
      this.setState({data: data,styles: styles},
        () =>{
            console.log(this.state.data);
        });

    //   var data ={ key: '' ,value:'',color: ''}
      var styles={
        '.chart_text': {
          fontSize: '1em',
          fill: '#fff'
        }
      };

//     this.callApi()
//     .then(res => 
//       {
        
//       console.log(res); 
//       var resNew= res;
//     //   for(var i=0; i < res.length; i++){
//     //     var data ={ key: '' ,value:'',color: ''}
//     //        if(res[i].status=='Completed'){
//     //         data.key= 'Submitted';
//     //         data.color= '#1f77b4';
//     //        }
//     //        else{
//     //         data.key= 'NotSubmitted';
//     //         data.color= '#ff7f0e';
//     //        }
//     //        data.value= res[i].csum;
//     //        resNew.push(data);
//     //   }
//       this.setState({ data: resNew,styles: styles },
//         ()=>
//     {

//     })
//       })      
//     .catch(err => console.log(err));
//   console.log(this.state.data)


 };
 



  callApi = async () => {
    // fetch('http://10.74.17.159:4500/cyberarknode/hacks')
    const response = await fetch('http://10.74.17.159:4500/cyberarknode/findPie');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
render(){
    return (
    <PieChart size={200}  labels
    data={this.state.data ? this.state.data : null}
    styles={this.state.styles ? this.state.styles : null}/>
    );
}
}



export default Chart;