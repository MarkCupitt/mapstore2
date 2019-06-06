import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

class MarkComponent extends React.Component {
    static propTypes = {
        zoom: PropTypes.number
    };

    render() {
        const style = { position: "absolute", top: "100px", left: "100px", zIndex: 1000000 };
        return <div style={style}>Zoom: {this.props.zoom}</div>;
    }
}

const ConnectedMark = connect((state) => {
    return {
        zoom: get(state, 'map.present.zoom') // connected property
    };
})(MarkComponent);

export const MarkPlugin = ConnectedMark;