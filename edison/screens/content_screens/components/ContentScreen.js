import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { connect } from "react-redux";
import { contentSet } from '../../../store/actions/index';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const initialLayout = { width: Dimensions.get('window').width };

class ContentScreen extends Component {


    handleIndexChange = newIndex => {
        const contentTypeMap = new Map();
        contentTypeMap.set(0,'videos');
        contentTypeMap.set(1,'readings');
        contentTypeMap.set(2,'assignments');
        contentTypeMap.set(3,'quizzes');

        this.props.contentTypeSetFunction(newIndex,contentTypeMap.get(newIndex));
    };

  render(){
    let index =this.props.contentIndex;
    let routes = [
        { key: 'videos', title: 'Videos' },
        { key: 'readings', title: 'Readings' },
        { key: 'assignments', title: 'Assignments' },
        { key: 'quizzes', title: 'Quizzes' }
      ];
 
   const renderScene = SceneMap({
    videos: FirstRoute,
    readings: SecondRoute,
    assignments: FirstRoute,
    quizzes: SecondRoute,
   });


    return (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
          style={styles.container}
        />
      );
  }

}

const mapStateToProps = state => {
    return {
      className: state.classInfo.className,
      board: state.boardInfo.board,
      subjectName: state.subjectInfo.subjectName,
      chapterName: state.chapterInfo.chapterName,
      contentType: state.contentInfo.contentType,
      contentIndex: state.contentInfo.contentIndex
    };
  };
  
const mapDispatchToProps = dispatch => {
    return {
        contentTypeSetFunction: (contentIndex,contentType) => dispatch(contentSet(contentIndex,contentType))
    };
  };

export default connect( mapStateToProps, mapDispatchToProps) (ContentScreen);

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
