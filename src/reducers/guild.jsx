import { List } from 'immutable';

export function guildHasErrored(state = false, action) {
    switch (action.type) {
        case 'GUILD_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function guildIsLoading(state = false, action) {
    switch (action.type) {
        case 'GUILD_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function guild(state = {}, action) {
    switch (action.type) {
        case 'GUILD_FETCH_DATA_SUCCESS':
            return action.guild;

        default:
            return state;
    }
}
