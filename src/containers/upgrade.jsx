import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import upgrade from '../reducers/upgrade';

class upgradePage extends Component {
	componentWillMount(){
		// this.props.actions.loadUpgrades();
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
	(dispatch) => ({ actions: bindActionCreators({}, dispatch)})
)(upgradePage);
