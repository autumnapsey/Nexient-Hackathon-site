import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guildFetchData} from '../actions/guild';
import PropTypes from 'prop-types';

class GuildList extends Component {
	componentDidMount() {
		this.props.fetchData('https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6');
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry, there was an error loading the guild.</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading</p>;
		}

		return (
			<ul>
				<li> Level: {this.props.guild.level} </li>
				<li> MotD: {this.props.guild.motd} </li>
				<li> Aetherium: {this.props.guild.aetherium} </li>
				<li> Favor: {this.props.guild.favor} </li>
				<li> Members: {this.props.guild.member_count} </li>
			</ul>
		);
	}
}

GuildList.propTypes = {
	fetchData: PropTypes.func.isRequired,
	guild: PropTypes.object.isRequired,
	hasErrored: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {guild: state.guild, hasErrored: state.guildHasErrored, isLoading: state.guildIsLoading};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(guildFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GuildList);
