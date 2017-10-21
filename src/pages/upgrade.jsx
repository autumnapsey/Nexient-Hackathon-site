import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import upgradeActions from '../actions/Upgrade';
import upgrade from '../reducers/upgrade';

class upgradePage extends Component {
	componentWillMount(){
		this.props.actions.loadUpgrade();
	}
	render(){
		return (
			<upgrade />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({...upgradeActions}, dispatch)})
)(upgradePage);
