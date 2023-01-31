// Write your code here

const Logout = props => {
  const {className, onClick} = props
  return (
    <button className={className} type="button" onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
