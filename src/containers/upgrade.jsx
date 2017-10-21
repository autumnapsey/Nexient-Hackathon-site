import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Upgrades from '../components/upgrades';

class UpgradePage extends Component {
	componentWillMount(){
		// this.props.actions.loadUpgrades();
	}
	render(){
		return (
			<Upgrades />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({}, dispatch)})
)(UpgradePage);
