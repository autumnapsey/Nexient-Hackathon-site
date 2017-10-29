import React, {Component} from 'react';
import {connect} from 'react-redux';
import {upgradeFetchData} from '../actions/upgrade';
import PropTypes from 'prop-types';

class Upgrade extends Component {
	componentWillMount() {
		this.props.fetchData('https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975/upgrades?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6')
	}

	render() {
		if (this.props.hasErrored) {
			return (<p>Sorry, there was an error loading the upgrades.</p>);
		}

		if (this.props.isLoading) {
			return (<p>Loading</p>);
		}

		return (
			<li key={this.props.key}>
        {this.props.value}
			</li>
		);
	}
}

Upgrade.propTypes = {
	fetchData: PropTypes.func.isRequired,
	upgrade: PropTypes.array.isRequired,
	hasErrored: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {upgrade: state.upgrade, hasErrored: state.upgradeHasErrored, isLoading: state.upgradeIsLoading};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(upgradeFetchData(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade);
