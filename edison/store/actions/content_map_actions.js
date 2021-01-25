import { CONTENT_MAP_SET } from "./action_types";
import QueryExecutor from '../../utils/db_query_executor'

export const fetchContentMapSet = async (params) => {

    const res = await QueryExecutor.getAllBoards()
    
    return{
        type: CONTENT_SET,
        res,
    }
}