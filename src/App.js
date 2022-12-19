import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import RemoveBtn from './components/RemoveBtn';
import SearchFilter from './components/SearchFilter';

const initialState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: '',
  searchFill: '',
  searchRarity: 'todas',
  boxCheck: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialState,
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardSaver: [],
      disableFill: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.disableBtn);
  };

  onSaveButtonClick = () => {
    const { cardTrunfo } = this.state;
    const { ...state } = this.state; // captura os elementos do state

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true, cardTrunfo: false });
    }

    const newInfos = { ...state }; // clona o state inicial com as informações novas

    this.setState(({ cardSaver }) => ({ // {cardSaver} pega a chave como callback
      cardSaver: [...cardSaver, newInfos], // salva no cardSaver os valores antigos com os novos valores
      ...initialState, // utiliza as informações do estado inicial para "zerar" os estados ao recarregar
    }));
  };

  cardRemove = (name, trunfoCard) => {
    const { cardSaver } = this.state;

    if (trunfoCard === true) {
      const newSave = cardSaver.filter((eachCard) => eachCard.cardTrunfo !== trunfoCard);
      this.setState({ cardSaver: [...newSave], hasTrunfo: false, cardTrunfo: false });
    } else {
      const newSave = cardSaver.filter((eachCard) => eachCard.cardName !== name);
      this.setState({ cardSaver: [...newSave] });
    }
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
      boxCheck,
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

    this.setState({ disableFill: boxCheck });
  };

  render() {
    const { cardSaver, searchFill, searchRarity,
      boxCheck, disableFill } = this.state;
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
        <div>
          <SearchFilter
            searchFill={ searchFill }
            searchRarity={ searchRarity }
            boxCheck={ boxCheck }
            disableFill={ disableFill }
            onInputChange={ this.onInputChange }
          />
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
        <div>

          {cardSaver.filter((raridade) => (searchRarity === 'todas' ? cardSaver
            : raridade.cardRare === searchRarity))
            .filter((nome) => nome.cardName.toLowerCase()
              .includes(searchFill.toLowerCase()))
            .filter((cardTrue) => (boxCheck ? cardTrue.cardTrunfo : cardTrue))
            .map((elem) => (
              <section key={ elem.cardName }>
                <Card { ...elem } />
                <RemoveBtn
                  type="button"
                  cardRemove={ this.cardRemove }
                  cardTrunfo={ elem.cardTrunfo }
                  cardName={ elem.cardName }
                />
              </section>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
