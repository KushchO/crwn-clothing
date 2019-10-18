import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionAsArray } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ shopCollections }) => (
	<div className="collections-overview">
		{shopCollections.map(({ id, ...otherCollectionProps }) => (
			<PreviewCollection key={id} {...otherCollectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	shopCollections: selectCollectionAsArray
});

export default connect(mapStateToProps)(CollectionsOverview);
