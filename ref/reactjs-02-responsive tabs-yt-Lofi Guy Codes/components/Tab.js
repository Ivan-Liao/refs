import React from 'react';

class Tab extends React.Component {

	render() {
		return (
			if (this.props.isSelected) {
				return (
					{ this.props.children }
				);
			}
			return null
		);
	}
}

export default Tab;