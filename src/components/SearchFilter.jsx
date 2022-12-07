import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilter extends Component {
  render() {
    const { searchFill, onInputChange, searchRarity } = this.props;
    return (
      <div>
        <input
          type="text"
          name="searchFill"
          data-testid="name-filter"
          value={ searchFill }
          placeholder="Pesquisa"
          onChange={ onInputChange }
        />
        <select
          name="searchRarity"
          value={ searchRarity }
          onChange={ onInputChange }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}

SearchFilter.propTypes = {
  searchFill: PropTypes.string.isRequired,
  searchRarity: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchFilter;
