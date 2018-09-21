import axios  from "axios"
import API from "../../apis/api"

const ADDUSER = "ADD_USER"

export const addUser = (user) => {
    return {
        type: ADDUSER,
        user
    }
}
