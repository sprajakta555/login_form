function loginAuth(username,password) {
    var login=false
    const user='prajakta'
    const pwd='123'
    if (user===username && pwd===password) {
        login=true
    }

    return login
    
}
export default loginAuth