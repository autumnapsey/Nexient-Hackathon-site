import React, {Component} from 'react';
import {connect} from 'react-redux';
import {memberFetchData} from '../actions/member';
import PropTypes from 'prop-types';

class MemberList extends Component {
	componentDidMount() {
		this.props.fetchData('https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975/members?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6');
	}

	render() {
		if (this.props.hasErrored) {
			return (<p>Sorry, there was an error loading the member members.</p>);
		}

		if (this.props.isLoading) {
			return (<p>Loading</p>);
		}

		return (
			<ul>
        {this.props.member.map((item) => (
          <li key={item.name}>
            {item.name} - {item.rank}
          </li>
        ))}
			</ul>
		);
	}
}

MemberList.propTypes = {
	fetchData: PropTypes.func.isRequired,
	member: PropTypes.array.isRequired,
	hasErrored: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {member: state.member, hasErrored: state.memberHasErrored, isLoading: state.memberIsLoading};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(memberFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberList);
