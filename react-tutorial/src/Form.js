import React, { Component } from 'react';
import './App.css';


class Form extends Component {

    constructor(props) {

        super(props);
        this.initialState = {

            name: '',
            job: '',
        };

        this.state = this.initialState;
    }

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    

    render() {

        const {name, job } = this.state;

        return (

            <form onSubmit={e => { e.preventDefault(); }}>
            <div className="form-row">
                <div class="form-group col-md-12">
                    <label for="formName">Name </label>
                    <input 
                        type="text"
                        class="form-control"
                        id="formName"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                </div>
            </div>
            <div className="form-row">
                    <div class="form-group col-md-12">
                    <label for="formJob">Job</label>
                    <input
                        type="text"
                        class="form-control"
                        id="formJob"
                        name="job"
                        value={job}
                        onChange={this.handleChange}
                        placeholder="Job"
                    />
                    </div>
            </div>
                    <input type="button"
                        class="btn btn-primary"
                        value="Submit"
                        onClick={this.submitForm}
                    />
            </form>
        );
    }
}

export default Form;
