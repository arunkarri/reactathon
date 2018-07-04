import React, { Component } from 'react';
import FaTrophy from 'react-icons/lib/fa/trophy';

class ReportTables extends Component {
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
        const response = await fetch('http://10.74.17.159:4500/cyberarknode/participantLeaderboard');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    render() {
        return (
            <div className="content table-responsive table-full-width">
                <table className="table table-striped leaderfont">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Email</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.events.map(function (event, index) {
                            return <tr key={index}>
                                <td>{event.userName}</td>
                                <td>{event.score}</td>
                                <td>{event.mailId}</td>
                                {event.score > 1000 &&
                                    <td><FaTrophy color={'#e5e4e2'} /></td>
                                }
                                {event.score < 500 &&
                                    <td><FaTrophy color={'#CD7F32'} /></td>
                                }
                                {event.score > 500 && event.score< 1000 &&
                                    <td><FaTrophy color={'gold'} /></td>
                                }

                            </tr>
                        })}


                    </tbody>
                </table>
            </div>
        );
    }
}



export default ReportTables;