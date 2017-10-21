const url = 'https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6';

function loadGuild(dispatch) {
  return fetch(url)
    .then(res => res.json())
    .then(
      data => dispatch({ type: 'LOAD_GUILD_SUCCESS', data }),
      err => dispatch({ type: 'LOAD_GUILD_FAILURE', err })
    );
}
