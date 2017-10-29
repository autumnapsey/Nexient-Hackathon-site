export function upgradeListHasErrored(bool) {
	return {type: 'UPGRADE_LIST_HAS_ERRORED', hasErrored: bool};
}

export function upgradeListIsLoading(bool) {
	return {type: 'UPGRADE_LIST_IS_LOADING', isLoading: bool};
}

export function upgradeListFetchDataSuccess(upgradeList) {
	return {type: 'UPGRADE_LIST_FETCH_DATA_SUCCESS', upgradeList};
}

export function upgradeListFetchData(url) {
	return (dispatch) => {
		dispatch(upgradeListIsLoading(true));

		fetch(url).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(upgradeListIsLoading(false));

			return response;
		}).then((response) => response.json())
		.then((upgradeList) => dispatch(upgradeListFetchDataSuccess(upgradeList)))
		.catch(() => dispatch(upgradeListHasErrored(true)));
	};
}
