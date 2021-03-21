import { FAB, Portal, Provider } from 'react-native-paper';

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {MidasStyles} from '../constants/'
import { connect } from "react-redux";
import Database from '../utils/db_utils'

class FABGroup extends Component {

    state = {
        open:false
    }

    constructor(props) {
        super(props)
        this.state = {
             
        }
        Database.read('SELECT * FROM users where id=?',[this.props.userId], this, 'userInfo')

    }
    

    onStateChange = (open) => {
        this.setState({
            open:open['open']
        })
    }

    render() {
        const {open, userInfo} = this.state
        let userData
        if(userInfo!==undefined){
            userData = userInfo['rows'][0]

        }
        return (
                    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'calendar-today' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            {
              icon: 'monitor-dashboard',
              label: 'View Dashboard',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'account',
              label: 'My Profile',
              onPress: () => {alert('Profile Info \nName : '+userData['user_name'] + '\nDesignation : '+userData['role']+ '\nAddress : '+userData['address'])},
              small: false,
            },
          ]}
          onStateChange={(open)=>this.onStateChange(open)}
          onPress={() => {
            if (open) {
                this.setState({
                    open:false
                })}
            else{
                this.setState({
                    open:true
                })
              // do something if the speed dial is open
            }
          }}
          fabStyle={{backgroundColor:'#fd0d20',marginRight:'32px',marginBottom:'32px',transform:[{scale:1.25}]}}
          small={false}
        />
      </Portal>
    </Provider>

        )
    }
}

const mapStateToProps = state => {
    return {
      userId: state.boardInfo.userId
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        classSetFunction: (className) => dispatch(classSet(className))
    };
  };

  export default connect( mapStateToProps, mapDispatchToProps) (FABGroup);
