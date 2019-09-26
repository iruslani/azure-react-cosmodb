import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const SearchResultTable = ({ baseImgUrl, data }) => {
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
      cell: row => (
        <div>
          <Link to={`recipe/${row.id}`}>{row.title}</Link>
        </div>
      )
    },
    {
      name: 'Cook Time',
      selector: 'readyInMinutes',
      sortable: true,
      right: true
    },
    {
      name: 'Servings',
      selector: 'servings',
      sortable: true,
      right: true
    },
    {
      name: 'Image',
      selector: 'image',
      sortable: true,
      cell: row => (
        <div>
          <img height="100px" alt="food" src={`${baseImgUrl}${row.image}`} />
        </div>
      ),
      right: true
    }
  ];
  return <DataTable title="Search Results" columns={columns} data={data} />;
};

SearchResultTable.defaultProps = {
  data: []
};

SearchResultTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  baseImgUrl: PropTypes.string.isRequired
};

export default SearchResultTable;
