import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeTab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'hometab-list-item';

        if (activeTab === label) {
            className += ' hometab-list-active';
        }
        return (
            <li className={className} onClick={onClick}>
            {label}
            </li>
        );
    }
}

export default HomeTab