import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import memberActions from '../actions/Member';
import member from '../reducers/member';

class MemberPage extends Component {
	componentWillMount(){
		this.props.actions.loadMember();
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
	(dispatch) => ({ actions: bindActionCreators({...memberActions}, dispatch)})
)(MemberPage);
