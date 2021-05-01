import {
    delete_contact,
    add_contact

} from '../constants/actionsTypes'

export const deleteContact = (payload) => {
    return {
        type : delete_contact, payload
    }
}

export const add = (payload) => {
    return {
        type : add_contact, payload
    }
}