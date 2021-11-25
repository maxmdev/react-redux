import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbiddenWords = ['angular', 'vue', 'php'];

export function filterSpamWords({dispatch}) {
    return function (next) {
        return function (action) {
            if(action.type === CREATE_POST) {
                const isSpamMessage = forbiddenWords.filter(w =>
                    action.payload.title.toLowerCase().includes(w.toLowerCase())).length;

                if(isSpamMessage) {
                    return dispatch(showAlert('Spam message detected. Please, check input.'));
                }
            }

            return next(action);
        }
    }
}