import React, { Component } from 'react'
import { View } from 'react-native'
import BootstrapTable from 'react-bootstrap-table-next';
import Database from '../utils/db_utils'
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import '../assets/css/bootstrap.css';
import CommonUtils from '../utils/common_utils'

export default class Dashboard extends Component {

    state = {
        tableData:[]
    }

    dateDiff(d1, d2){
        const date1 =CommonUtils.stringToDate(d1, "DD-MM-YYYY HH:mm:ss")
        const date2 =CommonUtils.stringToDate(d2, "DD-MM-YYYY HH:mm:ss")
        const diffTime = Math.abs(date2 - date1);
        const diffSecs = Math.ceil(diffTime / 1000);
        const hrs = Math.floor(diffSecs/3600) + ''
        const mins =  Math.ceil((diffSecs%3600)/60) + ''
        const hrsString =  (hrs.length == 2)?hrs:"0"+hrs
        const minString =  (mins.length == 2)?mins:"0"+mins
        return hrsString + ":" + minString 
    }

    componentDidMount(){
        query = 'Select * from tracking_info'
        params =[]
        Database.read(query,params, this, 'dashboardData')
        const self = this
        setTimeout(()=>{
            if(self.state.dashboardData){
                let dashboardData = Array.from(self.state.dashboardData['rows'])
                dashboardData.map((data)=>{
                    let screenName = data['screen_name']
                    let screenInfo = screenName.split(':')
                    data['board'] = screenInfo[0]
                    data['className'] = screenInfo[1]
                    data['subjectName'] = screenInfo[2]
                    data['pdfTitle'] = screenInfo[3]
                    data['duration'] = self.dateDiff(data['enter_time'],data['exit_time'])
                    data['user_id'] = "midas_"+data['user_id']
                })
                self.setState({
                    tableData : dashboardData
                })
            }

        },1000)
    }

    render() {
        const {tableData} = this.state
        const { ExportCSVButton } = CSVExport;
        const { SearchBar } = Search;
        const columns = [{
            dataField: 'id',
            text: 'Sr no.' ,
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        },{
            dataField: 'user_id',
            text: 'User Id' ,
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        },{
            dataField: 'board',
            text: 'Board',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }

        },{
            dataField: 'className',
            text: 'Class',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        },{
            dataField: 'subjectName',
            text: 'Subject Name',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px'}
        },{
            dataField:'pdfTitle',
            text:'Book Name',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        },{
            dataField:'enter_time',
            text: 'Enter Time',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }

        },{
            dataField:'exit_time',
            text: 'Exit Time',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        },{
            dataField:'duration',
            text: 'Duration (HH:MM)',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }
        }]

        return (
            <View>
                <ToolkitProvider
                keyField="id"
                data={ tableData }
                columns={ columns }
                search ={{
                    placeholder:'Search Something here '
                }}
                bootstrap4
                >
                {
                    props =>
                    <div>
                    <hr />
                        <div class="d-flex justify-content-between">
                    <SearchBar { ...props.searchProps } style={{width:'300%', borderRadius:'30px'}}/>
                    <ExportCSVButton { ...props.csvProps } style={{width:'25%',backgroundColor: 'black', color:'white',fontFamily:'MidasFont',fontSize:'20px', borderRadius:'30px'}}>Export CSV!!</ExportCSVButton>  
                    </div> 
                    <hr />

                    <BootstrapTable { ...props.baseProps } />
                    </div>
                    
                }
                </ToolkitProvider>
            </View>
        )
    }
}
