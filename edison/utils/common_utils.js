
import moment from 'moment'

class CommonUtils  {
    constructor(){

    }
    dateRenderer = (date) => {
        format = "YYYY-MM-DD HH:mm:ss"
        datetime = moment(date).format(format)
        return datetime
    }
    dateRendererDashboard = (date) => {
        format = "DD-MM-YYYY HH:mm:ss"
        datetime = moment(date).format(format)
        return datetime
    }
    stringToDate = (dateString, dateFormat) => {
        return moment(dateString,  dateFormat).toDate()
    }
    
}

module.exports = new CommonUtils();