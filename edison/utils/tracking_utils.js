import Database from './db_utils'
import CommonUtils from './common_utils'
import moment from 'moment'

format = "YYYY-MM-DD HH:mm:ss"

LOGOUT_TIME = 30

class LoginUtils  {
    constructor(){

    }
    track_user_activity_for_screen = (screen_name, user_id, class_obj, track_id) => {
        query = 'INSERT INTO tracking_info (user_id, screen_name, enter_time) values (?, ?)'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        params = [user_id, screen_name, sqliteDateFormat]
        Database.write(query,params)
    }
    is_login_still_active = (class_obj, state_name='login_info') => {
    
    }

}

module.exports = new LoginUtils();