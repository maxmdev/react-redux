import React from "react";
import {connect} from "react-redux";
import debounce from "lodash.debounce";
import {fetchSuggestions, hideSuggestions, showSuggestions} from "../redux/actions";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    _fetchSuggestions = debounce((event) => {
        this.props.fetchSuggestions(this.state[event.target.name])
    }, 400);

    changeInput = event => {
        event.persist();

        this.setState(prev => (
            {...prev, ...{
                    [event.target.name]: event.target.value
                }}
        ), () => {
            if(this.state[event.target.name].length >= 2) {
                this._fetchSuggestions(event);
                this.props.showSuggestions();
            } else {
                this.props.hideSuggestions();
            }
        });
    }

    render() {
        return (
            <div className='m-4'>
                <label htmlFor='exampleDataList' className='form-label'>Autocomplete Example</label>
                <input className='form-control'
                       list='datalistOptions'
                       value={this.state.title}
                       name='title'
                       onChange={event => this.changeInput(event)}
                       onBlur={() => this.props.hideSuggestions()}
                       placeholder='Type to search...'/>
                <datalist id='datalistOptions'>
                    {
                        this.props.displaySuggestions && (
                            this.props.suggestions.map(suggestion =>
                                <option value={suggestion.title} key={suggestion.id}/>)
                        )
                    }
                </datalist>
                <p className='fw-lighter'>Type: qui, sunt...</p>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchSuggestions,
    hideSuggestions,
    showSuggestions
};

const mapStateToProps = state => ({
    displaySuggestions: state.autocomplete.displaySuggestions,
    suggestions: state.autocomplete.suggestions
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);