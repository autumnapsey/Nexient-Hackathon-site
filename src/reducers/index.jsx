import { combineReducers } from 'redux';
import { guild, guildHasErrored, guildIsLoading } from './guild';
import { member, memberHasErrored, memberIsLoading } from './member';
import { upgrade, upgradeHasErrored, upgradeIsLoading } from './upgrade';

export default combineReducers({
    guild,
    guildHasErrored,
    guildIsLoading,
    member,
    memberHasErrored,
    memberIsLoading,
    upgrade,
    upgradeHasErrored,
    upgradeIsLoading
});
