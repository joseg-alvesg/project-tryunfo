import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilter extends Component {
  render() {
    const { searchFill, onInputChange,
      searchRarity, boxCheck, disableFill } = this.props;
    return (
      <div>
        <input
          type="text"
          name="searchFill"
          data-testid="name-filter"
          value={ searchFill }
          placeholder="Pesquisa"
          disabled={ disableFill }
          onChange={ onInputChange }
        />
        <select
          name="searchRarity"
          value={ searchRarity }
          disabled={ disableFill }
          onChange={ onInputChange }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="boxCheck">
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="boxCheck"
            checked={ boxCheck }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

SearchFilter.propTypes = {
  searchFill: PropTypes.string.isRequired,
  searchRarity: PropTypes.string.isRequired,
  boxCheck: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  disableFill: PropTypes.bool.isRequired,
};

export default SearchFilter;
