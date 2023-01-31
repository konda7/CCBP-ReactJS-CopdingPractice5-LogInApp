// Write your code here

const Message = props => {
  const {isLoggedin, className} = props
  return isLoggedin ? (
    <h1 className={className}>Please Login</h1>
  ) : (
    <h1 className={className}>Welcome User</h1>
  )
}

export default Message
