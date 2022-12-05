import React from 'react';
import PropTypes from 'prop-types';

class RemoveBtn extends React.Component {
  render() {
    const { cardRemove, cardTrunfo, cardName } = this.props;

    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ () => cardRemove(cardName, cardTrunfo) }
      >
        Excluir
      </button>
    );
  }
}

RemoveBtn.propTypes = {
  cardRemove: PropTypes.func,
  cardName: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default RemoveBtn;
