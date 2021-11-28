import React from "react";
import {connect} from "react-redux";
import debounce from "lodash.debounce";
import {
    fetchSuggestions,
    hideSuggestions,
    resetAutocomplete,
    selectSuggestion,
    showSuggestions
} from "../redux/actions";
import {ClearButton} from "./ClearButton/ClearButton";

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
            if(this.state[event.target.name].length >= 2 && !this.props.isSuggestionSelected) {
                this._fetchSuggestions(event);
                this.props.showSuggestions();
            } else {
                this.props.hideSuggestions();
            }
        });
    }

    selectSuggestion = event => {
        event.persist();

        this.setState(prev => (
            { ...prev, ...{
                [event.target.getAttribute('data-for')]: event.target.innerText
            }}
        ));

        this.props.selectSuggestion();
    }

    resetInput = (eventFor) => {
        this.props.resetAutocomplete();
        this.setState(prev => (
            { ...prev, ...{
                [eventFor]: ''
            }}
        ))
    }

    render() {
        return (
            <div className='m-4'>
                <label htmlFor='exampleDataList' className='form-label'>Autocomplete Example</label>
                <div className='input-group'>
                    <input className='form-control'
                           value={this.state.title}
                           name='title'
                           onChange={this.changeInput}
                           disabled={this.props.isSuggestionSelected}
                           placeholder='Type to search...'/>
                    { this.props.isSuggestionSelected && (
                        <ClearButton onReset={this.resetInput} eventFor='title'/>
                    )}
                </div>
                <div className='list-group text-start'>
                    {
                        this.props.displaySuggestions && (
                            this.props.suggestions.map(suggestion =>
                                <button type='button' key={suggestion.id}
                                        data-for='title'
                                        onClick={this.selectSuggestion}
                                        className='list-group-item list-group-item-action'>
                                    {suggestion.title}
                                </button>
                            )
                        )
                    }
                </div>
                <p className='fw-lighter'>Type: qui, sunt...</p>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchSuggestions,
    hideSuggestions,
    showSuggestions,
    selectSuggestion,
    resetAutocomplete
};

const mapStateToProps = state => ({
    displaySuggestions: state.autocomplete.displaySuggestions,
    suggestions: state.autocomplete.suggestions,
    isSuggestionSelected: state.autocomplete.isSelected
});

export default connect(mapStateToProps, mapDispatchToProps)(Autocomplete);