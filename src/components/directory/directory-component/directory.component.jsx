import React from 'react';
import './directory.styles.scss';
import MenuItem from '../../menu-items/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ directory }) => (
	<div className="directory-menu">
		{directory.map(({ id, ...sectionProps }) => (
			<MenuItem key={id} {...sectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	directory: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
