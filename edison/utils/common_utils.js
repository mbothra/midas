
import moment from 'moment'

class CommonUtils  {
    constructor(){

    }
    dateRenderer = (date) => {
        format = "YYYY-MM-DD HH:mm:ss"
        datetime = moment(date).format(format)
        return datetime
    }
}

module.exports = new CommonUtils();