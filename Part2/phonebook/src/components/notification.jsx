const Notification = ({message}) =>  {
    if (message === null) {
        return null
    }
    return (
        <div className = 'alert'>
            <p>{message}</p>
        </div>
    )
}

export default Notification
    
