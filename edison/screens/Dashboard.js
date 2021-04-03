import React, { Component } from 'react'
import { View } from 'react-native'
import BootstrapTable from 'react-bootstrap-table-next';
import Database from '../utils/db_utils'
import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import '../assets/css/bootstrap.css';

export default class Dashboard extends Component {

    state = {
        tableData:[]
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
        const { previousRoute } = this.props.route.params
        const columns = [{
            dataField: 'id',
            text: 'id' ,
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
            text: 'Start Time',
            sort: true,
            headerStyle: { backgroundColor: '#fd0d20', color:'white',fontFamily:'MidasFont',fontSize:'20px' }

        },{
            dataField:'exit_time',
            text: 'Exit Time',
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
