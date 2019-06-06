import React from 'react';

class MarkComponent extends React.Component {
    render() {
        const style = { position: "absolute", top: "100px", left: "100px", zIndex: 10000000 };
        return <div style={style}>Sample</div>;
    }
}

export const MarkPlugin = MarkComponent;
// the Plugin postfix is mandatory, avoid bugs by calling all your descriptors
// <Something>Plugin