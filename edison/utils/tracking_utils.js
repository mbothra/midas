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
        sqliteDateFormat = CommonUtils.dateRendererDashboard(new Date())
        params = [user_id, screen_name, sqliteDateFormat, "open"]
        Database.write(query,params, class_obj, obj_name)
    }
    track_user_activity_for_screen_exit = (tracking_id, class_obj, obj_name) => {
        query = 'UPDATE tracking_info SET exit_time = ?, status = ? WHERE id = ?'
        sqliteDateFormat = CommonUtils.dateRendererDashboard(new Date())
        params = [sqliteDateFormat, "closed", tracking_id]
        Database.write(query,params, class_obj, obj_name)
    }
    track_user_activity_for_screen_close = (class_obj, obj_name) => {
        query = 'UPDATE tracking_info SET exit_time = ?, status = ? WHERE exit_time is NULL'
        sqliteDateFormat = CommonUtils.dateRendererDashboard(new Date())
        params = [sqliteDateFormat, "closed"]
        Database.write(query,params, class_obj, obj_name)
        var millis = 1000
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while(curDate-date < millis);
           
        setTimeout(()=>{},500)
    }
}

module.exports = new TrackingUtils();