export const modal = {
  position: 'relative' as 'relative',
  backgroundColor: 'rgba(0,0,0,0.3)',
  width: '100%',
  height: '100%',
}

export const modalInner = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-55%, 10%)',
  backgroundColor: '#dadada',
  padding: '1rem 1.5rem',
  width: '24rem',
  borderRadius: '0.5rem'
}

const lineHeight = {
  lineHeight: '1.5rem'
}

const centerDiv = {
  display: 'flex',
  // justifyContent: 'center' as 'center',
  // height: '100vh',
  alignItems: 'center' as 'center',
  flexDirection: 'column' as 'column',
}

const inputField = {
  marginTop: '10px',
  padding: '5px 7px',
  fontSize: '1rem',
  marginBottom: '0.5rem'
};

const submitButton = {
  padding: '8px 18px',
  fontSize: '18px',
  marginTop: 10,
}

const containerStyle = {
  // borderRadius: '12px',
  // background: '#ffffff',
  // background: 'rgba(0, 0, 0, 0.7)',
  // position: 'absolute' as 'absolute',
  // color: '#dadada',
  // height: '72vh',
  // width: '40vw',
  // padding: '1rem'
}

export { lineHeight, centerDiv, inputField, submitButton, containerStyle }