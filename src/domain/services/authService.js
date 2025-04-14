const loginUser = (user, password) => {
    console.log("Datos recibidos:", { user, password }); // 🛠 Debug

    const credentials = { user: "admin", password: "admin" };
    if (user !== credentials.user || password !== credentials.password) {
        throw new Error("Credenciales incorrectas");
    }
    return { message: "Bienvenido " + user };
};
module.exports = { loginUser };
