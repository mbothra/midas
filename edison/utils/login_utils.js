import Database from './db_utils'
import CommonUtils from './common_utils'
import moment from 'moment'

format = "YYYY-MM-DD HH:mm:ss"

LOGOUT_TIME = 30

class LoginUtils  {
    constructor(){

    }
    update_login_archive_for_user = (userId, status) => {
        query = 'REPLACE INTO login_info (user_id, login_time, login_status) values (?, ?, ?)'
        sqliteDateFormat = CommonUtils.dateRenderer(new Date())
        params = [userId, sqliteDateFormat, status]
        Database.write(query,params)
    }
    is_login_still_active = (class_obj, state_name='login_info') => {
        let conn = Database.getConnection()
        query = 'SELECT * FROM login_info'
        Database.read(query, null, class_obj, state_name)

        query = 'SELECT * FROM users'
        Database.read(query, null, class_obj, 'users')

        let anyuserloggedin = false
        setTimeout(() => {
            if(class_obj.state.login_info){
                result = class_obj.state.login_info['rows']
                let status, loginTime, userId, user, role
                console.log(result)
                for(let i=0;i<result.length;i++){
                    user = result[i]
                    status = user['login_status']
                    loginTime = user['login_time']
                    userId = user['user_id']
                    loginTime = moment(loginTime,"YYYY-MM-DD HH:mm:ss").toDate()
                    const diffTime = Math.abs(new Date() - loginTime)/(1000*60);
                    if(diffTime < LOGOUT_TIME && status=='success'){
                        this.update_login_archive_for_user(userId, 'success')
                        users_list = class_obj.state.users['rows']
                        for(let j=0;j<users_list.length;j++){
                            if(users_list[j]['id']==userId){
                                role = users_list[j]['role']
                            }
                        }
                        class_obj.setState({
                            'userId': userId,
                            'isLogin':true,
                            'roleDb':role
                        })
                        anyuserloggedin = true
                    }
                    else {
                        if(!anyuserloggedin){
                            class_obj.setState({
                                'isLogin':false
                            })
                        }

                        this.update_login_archive_for_user(userId, 'logout')
                    }
                }
            }

        }, 100);  
    }

}

module.exports = new LoginUtils();