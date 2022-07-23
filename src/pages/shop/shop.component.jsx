import React from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewConatiner from "../../components/collections-overview/collection-overview.container";



/* We're using the Route component from react-router-dom to render the CollectionsOverview component
and the CollectionPage component */
class  ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;

        return(
            <div className="shop-page">
                <Route 
                exact path={`${match.path}`} 
                component={CollectionsOverviewConatiner}
                />
                <Route 
                path={`${match.path}/:collectionId`} 
                component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);