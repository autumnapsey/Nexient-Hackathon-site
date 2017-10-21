import { combineReducers } from 'redux';
import { guild, guildHasErrored, guildIsLoading } from './guild';
import { member, memberHasErrored, memberIsLoading } from './member';

export default combineReducers({
    guild,
    guildHasErrored,
    guildIsLoading,
    member,
    memberHasErrored,
    memberIsLoading
});
