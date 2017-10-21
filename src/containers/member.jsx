import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import member from '../reducers/member';

class MemberPage extends Component {
	componentWillMount(){
		// this.props.actions.loadMembers();
	}
	render(){
		return (
			<member />
		);
	}
}

export default connect(
	(state)=>({

	}),
	(dispatch) => ({ actions: bindActionCreators({}, dispatch)})
)(MemberPage);
