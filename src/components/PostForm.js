import React from "react";
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        const { title } = this.state;

        if(!title.trim()) { return }

        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost);
        this.setState({title: ''})
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

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm);