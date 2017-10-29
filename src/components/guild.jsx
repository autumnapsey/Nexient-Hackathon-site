import React, {Component} from 'react';
import {connect} from 'react-redux';
import {guildFetchData} from '../actions/guild';
import PropTypes from 'prop-types';
import '../App.css';

class GuildList extends Component {
	componentDidMount() {
		this.props.fetchData('https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6');
	};

	render() {
		let motd;
		let message;

		if (this.props.hasErrored) {
			return (<p>Sorry, there was an error loading the guild.</p>);
		}

		if (this.props.isLoading) {
			return (<p>Loading</p>);
		}

		if (this.props.guild.motd) {
			motd = this.props.guild.motd.split('\n');

			message = motd.map((line) => {
				return (
					<p>{ line }</p>
				)
						});
		}

		return (
			<section className='guildInfo'>
				<div> Level: {this.props.guild.level} </div>
				<br />
				<div className='infoDiv'>
					<div className='infoElement'> Aetherium: {this.props.guild.aetherium} </div>
					<div className='infoElement'> Favor: {this.props.guild.favor} </div>
					<div className='infoElement'> Members: {this.props.guild.member_count} </div>
				</div>
				<br />
				<div> MotD: {message} </div>
			</section>
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
