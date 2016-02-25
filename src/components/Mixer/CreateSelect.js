import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import Editable from '../Editable/Editable'
import EditableButtons from '../Editable/Buttons'
import Select from '../Form/Select'
// Display a list of content types the user can edit.
function CreateSelect({ action, ...props }) {
  const { field: { options }, form: { value } } = props
  const { onBlur, onFocus, onSelect, onSubmit } = action

  return (
    <Editable { ...props }>
      <Select onBlur={onBlur} onFocus={onFocus} options={options} onSelect={onSelect} />
      <EditableButtons
        onSubmit={onSubmit}
        preventClose
        value={value || options[0]}
      />
    </Editable>
  )
}
CreateSelect.propTypes = {
  action: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  open: PropTypes.bool,
  value: PropTypes.any,
}
CreateSelect.defaultProps = {
}
export default connectField()(CreateSelect)