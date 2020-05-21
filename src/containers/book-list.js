import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li onClick={() => this.props.selectBook(book)}
        key={book.title} 
        className="list-group-item">{book.title}
       </li>
      ) 
    })
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whenever is returned will be shown as props, inside the Booklist component
  return {
    books: state.books
  }
}

// Anything return from this function will end us as props in the container.
// So in reality the actions will be return from the function in the component props.
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called result should be passed to all of the reducers.
  // In deep explain -----Dispatch function will receive the action output and pass to all the reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote booklist from a component to container. It needs to know about the new dispatch method
// selectBook make it avalible as a props.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);