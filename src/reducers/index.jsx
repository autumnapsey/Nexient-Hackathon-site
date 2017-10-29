import { combineReducers } from 'redux';
import { guild, guildHasErrored, guildIsLoading } from './guild';
import { member, memberHasErrored, memberIsLoading } from './member';
import { upgradeList, upgradeListHasErrored, upgradeListIsLoading } from './upgradeList';

export default combineReducers({
    guild,
    guildHasErrored,
    guildIsLoading,
    member,
    memberHasErrored,
    memberIsLoading,
    upgradeList,
    upgradeListHasErrored,
    upgradeListIsLoading
});
