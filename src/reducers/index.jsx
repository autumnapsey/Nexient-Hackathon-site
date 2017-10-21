import { combineReducers } from 'redux';
import { guild, guildHasErrored, guildIsLoading } from './guild';

export default combineReducers({
    guild,
    guildHasErrored,
    guildIsLoading
});
