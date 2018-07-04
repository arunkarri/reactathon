import React, { Component } from 'react';

class HackLeader extends Component {
    constructor() {
        super();
        this.state = { events: [] }
    };

    componentDidMount() {
        // var List = [{name:"Hackathkghghjgon1",org :"Wireless"},{name:"Hackathon2",org :"Wireless4"},{name:"Hackathon3",org :"Wireline"}]



        this.callApi()
            .then(res => {

                console.log(res);

                this.setState({ events: res },
                    () => {

                    })
            })
            .catch(err => console.log(err));
        console.log(this.state.events)
    };



    callApi = async () => {
        // fetch('http://10.74.17.159:4500/cyberarknode/hacks')
        const response = await fetch('http://10.74.17.159:4500/cyberarknode/hackathonLeaderboard');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    render() {
        return (
            <div className="content table-responsive table-full-width">
                <table className="table table-hover table-striped leaderfont">
                    <thead>
                        <tr>
                            <th>Total Participants</th>
                            <th>Hackathon Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.events.map(function (event, index) {
                            return <tr key={index}>
                            
                            <td>{event.csum}</td>
                            <td>Hack_Team{index}</td>
                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        );
    }
}



export default HackLeader;