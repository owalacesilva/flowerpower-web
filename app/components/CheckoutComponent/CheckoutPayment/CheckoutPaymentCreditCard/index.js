/**
*
* CheckoutComponent
*
*/

import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import Form from 'components/Form';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards';
import Cleave from 'cleave.js/react';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100% !important',
    fontSize: 15,
    border: '0 !important',
    background: 'none !important',
    margin: '0 !important',
  },
  formControl: {
    margin: '0 !important',
    minWidth: 120,
    width: '100%',
    fontSize: 15
  },
});

const CleaveLabel = styled.div`
  font-size: 1.3em;
  margin-bottom: 10px;
`

export class CheckoutPaymentCreditCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      name: '',
    }
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const {classes} = this.props;
    const input = {
      height: '50px',
      width: '100%',
      borderRadius: '10px',
      fontSize: '1.3em',
      paddingLeft: '20px',
    }
    return (
      <Form>
        <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div style={{ margin: '30px 0px 30px 0px' }} className="input-with-label col-sm-12 text-left">
                <Cards
                  number={this.state.number}
                  name={this.state.name}
                  expiry={this.state.expiry}
                  cvc={this.state.cvc}
                  focused={this.state.focused}
                  placeholders={{ name: 'NOME COMPLETO', expiry: 'VALIDADE' }}
                />
              </div>
            </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>Número do Cartão:</CleaveLabel>
              <Cleave
                placeholder="**** **** **** ****"
                options={{ creditCard: true }}
                value={this.state.number}
                onChange={this.handleChange('number')}
                key="number"
                style={input}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>Vencimento:</CleaveLabel>
              <Cleave
                placeholder="mm/aa"
                options={{ date: true, datePattern: ['m', 'y'] }}
                value={this.state.expiry}
                onChange={this.handleChange('expiry')}
                key="expiry"
                style={input}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={8}>
            <div className="group">
              <CleaveLabel>Nome Completo (conforme no cartão):</CleaveLabel>
              <Cleave
                value={this.state.name}
                onChange={this.handleChange('name')}
                key="name"
                options={{ blocks:[99999], delimiter: '', uppercase: true }}
                style={input}
                uppercase={true}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="group">
              <CleaveLabel>Código de Segurança:</CleaveLabel>
              <Cleave
                options={{ blocks: [3] }}
                value={this.state.cvv}
                onChange={this.handleChange('cvv')}
                key="cvv"
                style={input}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>Data de Aniversário:</CleaveLabel>
              <Cleave
                options={{ date: true, datePattern: ['d', 'm', 'Y'] }}
                value={this.state.birthday}
                onChange={this.handleChange('birthday')}
                key="birthday"
                style={input}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="group">
              <CleaveLabel>CPF:</CleaveLabel>
              <Cleave
                options={{ blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'], numericOnly: true }}
                value={this.state.CPF}
                onChange={this.handleChange('CPF')}
                key="CPF"
                style={input}
              />
            </div>
          </Col>
        </Row>
      </Form>
    );
  }
}

CheckoutPaymentCreditCard.propTypes = {

};

// export default CheckoutPaymentCreditCard;
export default withStyles(styles)(CheckoutPaymentCreditCard);
