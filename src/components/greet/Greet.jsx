const Greet = ({ name }) => {
  return (
    <div>{`Hello ${name ? name : 'Guest'}`}</div>
  )
}

export default Greet