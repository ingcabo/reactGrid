//definimos la funcion reductora recive dos parametros el estado actual y la accion
const initialStateUser =  {
    name: "",
    lastName:"",
    email:"",
    dni:"",
    emailR:""
}

export default function UserReducer(state = initialStateUser , action) {
    if (action.type === "ADD_USER") {
        const  user  = action.user
        return user
    }
    return state
}
