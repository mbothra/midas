
import moment from 'moment'

class CommonUtils  {
    constructor(){

    }
    dateRenderer = (date) => {
        format = "YYYY-MM-DD HH:mm:ss"
        datetime = moment(date).format(format)
        console.log(datetime)
        return datetime
    }
}

module.exports = new CommonUtils();