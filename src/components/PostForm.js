import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' className='form-control'/>
                    <button className='btn btn-success mt-2' type='submit'>Add post</button>
                </form>
            </div>
        )
    }
}