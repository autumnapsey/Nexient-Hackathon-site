import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import guildActions from '../actions/Guild';
import guild from '../reducers/guild';

class GuildPage extends Component {
	componentWillMount(){
		this.props.actions.loadGuild();
	}
	render(){
		return (
			<guild />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({...guildActions}, dispatch)})
)(GuildPage);
