export function memberHasErrored(bool) {
	return {type: 'MEMBER_HAS_ERRORED', hasErrored: bool};
}

export function memberIsLoading(bool) {
	return {type: 'MEMBER_IS_LOADING', isLoading: bool};
}

export function memberFetchDataSuccess(member) {
	return {type: 'MEMBER_FETCH_DATA_SUCCESS', member};
}

export function memberFetchData(url) {
	return (dispatch) => {
		dispatch(memberIsLoading(true));

		fetch(url).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(memberIsLoading(false));

			return response;
		}).then((response) => response.json())
		.then((member) => dispatch(memberFetchDataSuccess(member)))
		.catch(() => dispatch(memberHasErrored(true)));
	};
}
