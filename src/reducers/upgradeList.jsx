export function upgradeListHasErrored(state = false, action) {
    switch (action.type) {
        case 'UPGRADE_LIST_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function upgradeListIsLoading(state = false, action) {
    switch (action.type) {
        case 'UPGRADE_LIST_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function upgradeList(state = [], action) {
    switch (action.type) {
        case 'UPGRADE_LIST_FETCH_DATA_SUCCESS':
            return action.upgradeList;

        default:
            return state;
    }
}
