import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { connect } from 'react-redux'
import { getArticles } from '../../actions/articleActions'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

class ArticleList extends Component {

  componentDidMount() {
    this.props.getArticles()
  }

  render() {

    const { articles } = this.props.article
    return(

      <Container>

        <ListGroup>
          <TransitionGroup className="article-list">
          {articles.map(({ _id, category,subject,body,source,date,poster,vote }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                
                {category},
                <h3>{subject}</h3>
                
                <p>{body}</p> 
                
                <NavLink to={source} activeClassName="selected" style= {{ 'font-size': 'calc(2px + 2vmin)' }}>
                  {source}
                </NavLink>

                <p>{date = new Date().toISOString().replace('T', ' ').substr(0, 16)}, {poster}</p>
              
              </ListGroupItem>
            </CSSTransition>
          ))}
          </TransitionGroup>
        </ListGroup>

      </Container>
    )
  }

}

ArticleList.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired // state
}

const mapStateToProps = (state) => ({
  article: state.article // from combined reducer at index
})

export default connect(mapStateToProps, { getArticles })(ArticleList)
