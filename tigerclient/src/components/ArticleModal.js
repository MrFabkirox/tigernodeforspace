import React, { Component } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addArticle } from '../actions/articleActions'

class ArticleModal extends Component {
  state = {
    modal: false,
    category:'',
    subject: '',
    body: '',
    source: '',
    date: '',
    poster: '',
    vote: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit= e => {
    e.preventDefault()

    const newArticle = {
      category: this.state.category,
      subject: this.state.subject,
      body: this.state.body,
      source: this.state.source,
      date: this.state.date,
      poster: this.state.poster,
      vote: this.state.vote,
    }
    this.props.addArticle(newArticle)
    this.toggle()
  }

  render() {
    return(
      <div>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={this.toggle}
        >Add Article</Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Add Article
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>

                <Label for="item">Article</Label>

                <Input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="category"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="add subject"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="body"
                  id="body"
                  placeholder="add body"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="source"
                  id="source"
                  placeholder="add source"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="date"
                  id="date"
                  placeholder="add date"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="poster"
                  id="poster"
                  placeholder="add poster"
                  onChange={this.onChange}
                />

                <Input
                  type="text"
                  name="vote"
                  id="vote"
                  placeholder="add vote"
                  onChange={this.onChange}
                />

                <Button
                  color="dark"
                  style={{marginTop: '2rem'}}
                  block
                >Add Item</Button>

              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>

    )
  }

}

const mapStateToProps = state => ({
  subject: state.subject,
  category: state.subject,
  body: state.body,
  source: state.source,
  date: state.date,
  poster: state.poster,
  vote: state.vote
})

export default connect(mapStateToProps, { addArticle })(ArticleModal)
