import React from "react";
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

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

        if(!title.trim()) {
            return this.props.showAlert('Post content cannot be empty.')
        }

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
                {this.props.alert && <Alert text={this.props.alert}/>}
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
                <p className='fw-lighter'>Forbidden words: Angular, php, vue...</p>
            </div>
        )
    }
}

const mapDispatchToProps = {
    createPost, showAlert
}

const mapStateToProps = state => ({
    alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);