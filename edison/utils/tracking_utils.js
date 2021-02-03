import Database from './db_utils'
import CommonUtils from './common_utils'
import moment from 'moment'

format = "YYYY-MM-DD HH:mm:ss"

LOGOUT_TIME = 30

class LoginUtils  {
    constructor(){

    }
    track_user_activity_for_screen = (screen_name, user_id, class_obj, track_id) => {
        query = 'INSERT INTO tracking_info (user_id, screen_name, enter_time, status) values (?, ?, ?, ?)'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        params = [user_id, screen_name, sqliteDateFormat, "open"]
        Database.write(query,params)
    }
    track_user_activity_for_screen_exit = (screen_name, user_id) => {
        query = 'SELECT * FROM tracking_info WHERE user_id = ? AND status = "open" AND screen_name = ?'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        // Database.write(query,params)

    }
    is_login_still_active = (class_obj, state_name='login_info') => {
        
    }

}

module.exports = new LoginUtils();