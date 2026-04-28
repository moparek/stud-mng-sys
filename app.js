function login(username, password) {
    if (username === "admin" && password === "123456") {
        return "Login successful";
    } else {
        return "Invalid username or password";
    }
}

console.log(login("admin", "123456"));

