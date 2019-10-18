import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => (
	<div className="collection-page">
		<h2 className="title">{collection.title}</h2>
		<div className="items">
			{collection.items.map(collectionItem => (
				<CollectionItem item={collectionItem} />
			))}
		</div>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
