const inlineElement = {
  display: 'inline-block',
}

const input = {
  height: 40,
  width: 100,
  borderRadius: 5,
  marginRight: 5,
  cursor: 'pointer'
}

export const table = {
  width: '100%'
}

export const tableData = {
  border: '1px solid #ddd',
  padding: '8px'
}

export const tableHead = {
  ...tableData,
  paddingTop: '12px',
  paddingBottom: '12px',
  textAlign: 'left' as 'left',
  backgroundColor: 'hsl(0, 0%, 17%)',
  color: 'white'
}

export const wrapper = {
  padding: '1.75rem 1rem'
}

const editButton = {
  ...input,
  backgroundColor: '#24a0ed',
  border: 'none',
  color: 'white',
  fontSize: '1rem'
}

const deleteButton = {
  ...input,
  backgroundColor: '#d9534f',
  border: 'none',
  color: 'white',
  fontSize: '1rem'
}

export { input, editButton, inlineElement, deleteButton }