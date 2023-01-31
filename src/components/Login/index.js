// Write your code here

const Login = props => {
  const {className, onClick} = props
  return (
    <button className={className} type="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
