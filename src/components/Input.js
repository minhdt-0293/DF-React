import React from 'react'
import { connect } from 'react-redux'
import { setTextAction } from '../actions'

const Input = ({ text, setText }) => {

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <input type="text" onChange={handleChange} />
  )
}

const mapStateToProps = state => ({
  text: state.input.text
});

const mapDispatchToProps = dispatch => ({
  setText: (text) => dispatch(setTextAction(text))
})
export default connect(mapStateToProps, mapDispatchToProps)(Input);
