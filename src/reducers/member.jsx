import { List } from 'immutable';

export function memberHasErrored(state = false, action) {
    switch (action.type) {
        case 'MEMBER_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function memberIsLoading(state = false, action) {
    switch (action.type) {
        case 'MEMBER_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function member(state = [], action) {
    switch (action.type) {
        case 'MEMBER_FETCH_DATA_SUCCESS':
            return action.member;

        default:
            return state;
    }
}
