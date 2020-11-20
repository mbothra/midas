import { BOARD_SET, ROLE_SET } from "./action_types";

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