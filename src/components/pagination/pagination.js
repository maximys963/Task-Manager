import React from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'semantic-ui-react';
import * as pagination_actions from '../.././action_creators/pagination_ac';
import './pagination.css';

const CustomPagination = (props) => {
    const { amount,
        defaultPage,
        changePage
    } = props;
    return(
        <div className='pagination-container'>
            <Pagination defaultActivePage={defaultPage} totalPages={Math.ceil(amount/3)}
                onPageChange={(e, {activePage}) => changePage(activePage)}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    defaultPage: state.pagination.currentPage
});

export default connect(mapStateToProps, pagination_actions)(CustomPagination);