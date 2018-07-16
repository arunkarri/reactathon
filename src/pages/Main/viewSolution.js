import React, { Component } from 'react';
import Modal from 'react-modal';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

class List extends React.Component {
  render() {
    return (
      <div>
          <div className="">
         
          <div className="card">
            {/* <div style={{backgroundImage: "url(" + Background + ")"}}> */}
            <div className="header">
              <h4 className="title">Teams List</h4>
            </div>
            <div className="content table-responsive table-full-width">
              <table className="table table-hover table-striped">
                <thead>
                  <tr>
                    <th>Team name</th>
                    <th>Solution Url</th>
                    <th>Video url</th>
                    <th>Working app url</th>
                  </tr>
                </thead>
                <tbody>
        {this.props.items.map((x, i) => (
            <tr key={i}>
                    <td>{x.team_name}</td>
                    <td><a href={x.solution} target="_blank">{x.solution}</a></td>
                    <td><a>{x.code_zip}</a></td>
                    <td><a>{x.video}</a></td>
                    <td><button type="button"  className="btn btn-xs btn-info btn-fill" onClick={this.props.onItemClick(i)}>Give Score
                      
     </button> </td>
     </tr>
     

        ))}
           </tbody>
              </table>
            </div>
          </div>
        </div>
            
      </div>
    );
  }
}

Modal.setAppElement('body');
class MultipleModals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItemsIsOpen: false,
      currentItem: -1,
      loading: false,
      selectedItem:{"hack_info":""},
      items: [],
      list:{"score":{}},
      
      
    };
    this.Submitscore = this.Submitscore.bind(this);
  }
  
Submitscore(e) {
   //
   //5b3b62d2ca4aa9c842eec019
       
    console.log('submitted');
   this.setState({list : {"score":{"Solution":90,"Presentation":80}}},()=>{
       console.log(this.state.list);
    this.cupdate().then(res => console.log('success response is',res))
    .catch(err => console.log(err));  
   });
   this.setState({ currentItem: -1 });
   // this.setState({selectedItem:this.state.items[index]});
    this.setState({selectedItem:this.state.items[-1]}
          , () => {
            console.log(this.state.selectedItem);
          })
  

    e.preventDefault();
}

cupdate = async () => {
    
        
    const response = await fetch('http://localhost:4500/cyberarknode/teams/5b3b62d2ca4aa9c842eec019',{method:'PUT',headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(this.state.list)
});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  componentDidMount() {
    // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]
    
    this.callApi()
    .then(res => 
      {
        
      console.log(res); 
      this.setState({ items: res })
      })      
    .catch(err => console.log(err));

};

callApi = async () => {
    // fetch('http://localhost:4500/cyberarknode/hacks')
    const response = await fetch('http://localhost:4500/cyberarknode/teamsMaster');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  toggleModal = event => {
    event.preventDefault();
    if (this.state.listItemsIsOpen) {
      this.handleModalCloseRequest();
      return;
    }
    this.setState({
      items: [],
      listItemsIsOpen: true,
      loading: true
    });
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      listItemsIsOpen: false,
      loading: false
    });
  }
/*
  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    (new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 500);
    })).then(res => {
      this.setState({
        items: [1, 2, 3, 4, 5].map(x => `Item ${x}`),
        loading: false
      });
    });
    
  }*/

  onItemClick = index => event => {
    this.setState({ currentItem: index });
   // this.setState({selectedItem:this.state.items[index]});
    this.setState({selectedItem:this.state.items[index]}
          , () => {
            console.log(this.state.selectedItem);
          })
  
  }

  cleanCurrentItem = () => {
    this.setState({ currentItem: -1 });
  }

  render() {
    const { listItemsIsOpen } = this.state;
    return (
      <div>
                
  <List onItemClick={this.onItemClick} items={this.state.items} />
      {this.state.selectedItem ? <Modal
          id="test2"
          closeTimeoutMS={150}
          contentLabel="modalB"
          isOpen={this.state.currentItem > -1}
          onRequestClose={this.cleanCurrentItem}
          aria={{
            labelledby: "item_title",
            describedby: "item_info"
          }}>
          <h1 id="item_title">Scoring for - {this.state.selectedItem.team_name}</h1>
          <div id="item_info">
              {  this.state.selectedItem.hack_info ? this.state.selectedItem.hack_info[0].criteria.map((x, i) => (
            <div key={i}>
                    <div className="col-sm-4">{x}</div>
                     <div className="form-group">
                                 
                                    <input
                                        name="score"
                                        type="number" ref="score"
                                       />
                                </div>         
                      
    
    </div>
   
     

        ) ) : null}
         <button type="submit" className="btn btn-fill btn-info" onClick={this.Submitscore}>Submit</button>
         
          </div>
        </Modal> :null }
      </div>
    );
  }
}

export default MultipleModals
