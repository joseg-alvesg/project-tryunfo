import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardSaver: [],
    };
  }

  onInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.disableBtn);
  };

  onSaveButtonClick = () => {
    const { ...state } = this.state;
    const newInfos = { ...state };

    this.setState(({ cardSaver }) => ({
      cardSaver: [...cardSaver, newInfos],
      ...initialState,
    }));
  };

  disableBtn = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const maxNumber = 90;
    const attr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxNumber;
    const attr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxNumber;
    const attr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxNumber;
    const attrTotal = attr1 && attr2 && attr3;

    const name = cardName !== '';
    const descript = cardDescription !== '';
    const image = cardImage !== '';
    const rarity = cardRare !== '';
    const stringers = name && descript && image && rarity;

    const maxSum = 210;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxSum;

    if (sum && attrTotal && stringers) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    return (
      <div>
        <h1>Tryunfo project start</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
