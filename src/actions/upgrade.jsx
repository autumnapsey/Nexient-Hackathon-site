export function upgradeHasErrored(bool) {
	return {type: 'UPGRADE_HAS_ERRORED', hasErrored: bool};
}

export function upgradeIsLoading(bool) {
	return {type: 'UPGRADE_IS_LOADING', isLoading: bool};
}

export function upgradeFetchDataSuccess(upgrade) {
	return {type: 'UPGRADE_FETCH_DATA_SUCCESS', upgrade};
}

export function upgradeFetchData(url) {
	return (dispatch) => {
		dispatch(upgradeIsLoading(true));

		fetch(url).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(upgradeIsLoading(false));

			return response;
		}).then((response) => response.json())
		.then((upgrade) => dispatch(upgradeFetchDataSuccess(upgrade)))
		.catch(() => dispatch(upgradeHasErrored(true)));
	};
}
