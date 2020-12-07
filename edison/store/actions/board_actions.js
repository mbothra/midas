import { BOARD_SET, ROLE_SET, USERID_SET } from "./action_types";

export const boardSet = (board) => {
    return{
        type: BOARD_SET,
        board
    }
}

export const roleSet = (role) => {
    return{
        type: ROLE_SET,
        role
    }
}

export const userIdSet = (userId) => {
    return{
        type: USERID_SET,
        userId
    }
}