import React from "react";

export default class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        const { title } = this.state;

        const newPost = {
            title, id: Date.now().toString()
        }
    }

    changeInput = event => {
        event.persist();

        this.setState(prev => (
            {...prev, ...{
                [event.target.name]: event.target.value
            }}
        ))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        className='form-control'
                        value={this.state.title}
                        name='title'
                        onChange={this.changeInput}
                    />
                    <button className='btn btn-success mt-2' type='submit'>Add post</button>
                </form>
            </div>
        )
    }
}