import styles from './ClearButton.module.scss';
import React from "react";

export const ClearButton = ({ onReset, eventFor }) => {
    return (
        <button type='reset'
                onClick={() => onReset(eventFor)}
                className={'btn btn-danger ' + styles.clearButton}>
            Clear
        </button>
    )
}