import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {fetchSuggestions, hideSuggestions} from "../redux/actions";

export const Autocomplete = () => {
    const dispatchThrottle = 350;

    const dispatch = useDispatch();
    const showSuggestions = useSelector(state => state.autocomplete.showSuggestions);
    const suggestionsList = useSelector(state => state.autocomplete.suggestions);

    const [localState, setLocalState] = useState(() => ({
        title: ''
    }));

    const changeInput = event => {
        event.persist();

        setLocalState(prev => (
            {...prev, ...{
                [event.target.name]: event.target.value
            }}
        ))

        if(localState.hasOwnProperty(event.target.name) && localState[event.target.name].length > 0) {
            setTimeout(() => dispatch(fetchSuggestions(localState[event.target.name])), dispatchThrottle);
        } else {
            dispatch(hideSuggestions());
        }
    }

    return (
        <div className='m-4'>
            <label htmlFor='exampleDataList' className='form-label'>Autocomplete Example</label>
            <input className='form-control'
                   list='datalistOptions'
                   value={localState.title}
                   name='title'
                   onChange={event => changeInput(event)}
                   onBlur={() => dispatch(hideSuggestions())}
                   placeholder='Type to search...'/>
            <datalist id='datalistOptions'>
                {
                    showSuggestions && (
                        suggestionsList.map(suggestion => <option value={suggestion.title} key={suggestion.id}/>)
                    )
                }
            </datalist>
            <p className='fw-lighter'>Type: qui, sunt...</p>
        </div>
    )
}