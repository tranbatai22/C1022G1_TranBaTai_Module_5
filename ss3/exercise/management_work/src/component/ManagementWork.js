import React, {Component} from 'react';

class ManagementWork extends Component {
    constructor(){
        super();
        this.state ={
            listWork: [],
            item: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            item : event
        })
    }

    handleAdd = () => {
        let arrWork = [...this.state.listWork, this.state.item]
        this.setState({
            item : "",
            listWork: arrWork
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Work List</h1>
                <div className="d-flex">
                    <input onChange={(event) => this.handleChange(event.target.value)} type="text"></input>
                    <input onClick={() => this.handleAdd()} type="button" value="Add"></input>
                </div>

                <ul>
                    {
                        this.state.listWork.map((item,index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>

            </div>
        );
    }
}

export default ManagementWork;

