export function guildHasErrored(bool) {
	return {type: 'GUILD_HAS_ERRORED', hasErrored: bool};
}

export function guildIsLoading(bool) {
	return {type: 'GUILD_IS_LOADING', isLoading: bool};
}

export function guildFetchDataSuccess(guild) {
	return {type: 'GUILD_FETCH_DATA_SUCCESS', guild};
}

export function guildFetchData(url) {
	return (dispatch) => {
		dispatch(guildIsLoading(true));

		fetch(url).then((response) => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(guildIsLoading(false));

			return response;
		}).then((response) => response.json())
		.then((guild) => dispatch(guildFetchDataSuccess(guild)))
		.catch(() => dispatch(guildHasErrored(true)));
	};
}
