import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import uuid from 'uuid';

class AddMemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { topText: '', bottomText: '', imgUrl: '' };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.dispatch({
      type: 'ADD_MEME',
      payload: { ...this.state, id: uuid() }
    });
    this.setState({ topText: '', bottomText: '', imgUrl: '' });
  };

  formContent = () => {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="top-text" sm={2}>
              Top-Text
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="topText"
                id="topText"
                value={this.state.topText}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="bottom-text" sm={2}>
              Bottom Text
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="bottomText"
                id="bottomText"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="imageUrl" sm={2}>
              Image url
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="imgUrl"
                id="imgUrl"
                value={this.state.imgUrl}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <button type="submit"> Add Meme </button>
        </Form>
      </div>
    );
  };

  render() {
    return <div>{this.formContent()}</div>;
  }
}

// we are just updating the store's state, no need to return anything
function mapStateToProps(state) {
  return {};
}

const connectToState = connect(mapStateToProps);

export default connectToState(AddMemeForm);
