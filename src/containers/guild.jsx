import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Guild from '../components/guild';

class GuildPage extends Component {
	componentWillMount(){
		// this.props.actions.loadGuild();
	}
	render(){
		return (
			<Guild />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({}, dispatch)})
)(GuildPage);
