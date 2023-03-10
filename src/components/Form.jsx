import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <input
          id="domid"
          type="text"
          name="cardName"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />

        <textarea
          name="cardDescription"
          cols="30"
          rows="10"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <input
          type="number"
          name="cardAttr1"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />

        <input
          type="number"
          name="cardAttr2"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />

        <input
          name="cardAttr3"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <select
          name="cardRare"
          value={ cardRare }
          data-testid="rare-input"
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        {hasTrunfo ? (
          <span>Você já tem um Super Trunfo em seu baralho</span>
        ) : (
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />)}

        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onChange={ onInputChange }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
