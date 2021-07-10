import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeTab from './HomeTab'

class HomeBar extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (hometab) => {
    this.setState({ activeTab: hometab });
  }

render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    }= this;
    return (
      <div className="homebar">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <HomeTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
    }
}

export default HomeBar;
