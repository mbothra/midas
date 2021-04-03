import Database from './db_utils'
import CommonUtils from './common_utils'
import moment from 'moment'

format = "YYYY-MM-DD HH:mm:ss"

LOGOUT_TIME = 30

class TrackingUtils  {
    constructor(){

    }
    track_user_activity_for_screen = (screen_name, user_id, class_obj, obj_name) => {
        query = 'INSERT INTO tracking_info (user_id, screen_name, enter_time, status) values (?, ?, ?, ?)'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        params = [user_id, screen_name, sqliteDateFormat, "open"]
        Database.write(query,params, class_obj, obj_name)
    }
    track_user_activity_for_screen_exit = (tracking_id, class_obj, obj_name) => {
        query = 'UPDATE tracking_info SET exit_time = ?, status = ? WHERE id = ?'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        params = [sqliteDateFormat, "closed", tracking_id]
        Database.write(query,params, class_obj, obj_name)
    }
}

module.exports = new TrackingUtils();