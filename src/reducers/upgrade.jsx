export function upgradeHasErrored(state = false, action) {
    switch (action.type) {
        case 'UPGRADE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function upgradeIsLoading(state = false, action) {
    switch (action.type) {
        case 'UPGRADE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function upgrade(state = {}, action) {
    switch (action.type) {
        case 'UPGRADE_FETCH_DATA_SUCCESS':
            return action.upgrade;

        default:
            return state;
    }
}
