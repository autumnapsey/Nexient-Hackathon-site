import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Members from '../components/members';

class MemberPage extends Component {
	componentWillMount(){
		// this.props.actions.loadMembers();
	}
	render(){
		return (
			<Members />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({}, dispatch)})
)(MemberPage);
