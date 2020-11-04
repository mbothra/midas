import { BOARD_SET } from "./action_types";

export const boardSet = (board) => {
    return{
        type: BOARD_SET,
        board
    }
}