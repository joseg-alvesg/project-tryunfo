import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFilter extends Component {
  render() {
    const { searchFill, onInputChange } = this.props;
    return (
      <input
        type="text"
        name="searchFill"
        data-testid="name-filter"
        value={ searchFill }
        placeholder="Pesquisa"
        onChange={ onInputChange }
      />
    );
  }
}

SearchFilter.propTypes = {
  searchFill: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchFilter;
