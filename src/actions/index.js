export function selectBook(book){
  // Selectbook as an action creator it need to return an action, an object with type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}