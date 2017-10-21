import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guildFetchData } from '../actions/guild';
import PropTypes from 'prop-types';

class GuildList extends Component {
    componentDidMount() {
        this.props.fetchData('https://api.guildwars2.com/v2/guild/950609C1-F0EA-E611-80D4-E4115BDFF975?access_token=DEFB42BA-E677-D04D-99F3-4CA43C7B5B753C822DBF-3DA7-4748-8F71-8A5CECF25DD6');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading</p>;
        }

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

GuildList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(guildFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuildList);
