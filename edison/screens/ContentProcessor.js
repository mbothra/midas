import { parse } from 'fast-xml-parser';
import {MidasStyles,xml_data} from '../constants/';

const contents = parse(xml_data);

class ContentProcessor{
    // static getXMLResponse = () => {
    //     fetch('https://gist.githubusercontent.com/amvi20/1cd40d1e3e46366a0b8dcda95bb6669d/raw/187057d4a854be975c7ed0d309b0ae97373d1ae6/content.xml')
    //         .then((response) => response.text())
    //         .then((textResponse) => {
    //             console.log('response is ', textResponse)
    //             let obj = parse(textResponse);
    //             return obj;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }



    static getUniqueTagValues(tag,jsonArray){
        let mySet = new Set();
        let records = jsonArray.content.record;
        records.map((item,index) => mySet.add(item[tag]))
        return Array.from(mySet);     
    }


    static getAllChapters(board,classNum,subject){
        let mySet = new Set();
        let jsonArray = contents
        let records = contents.content.record;
        let filteredRecords = records.filter(d => d.Board === board && d.Class == classNum && d.Subject === subject)
        filteredRecords.map((item) => mySet.add(item['Chapter']))
        return Array.from(mySet);
    }

    static getDesciptionForChapter(board,chapter,classNumber,subject){
        let mySet = new Set();
        let jsonArray = contents
        let records = jsonArray.content.record;
        let filteredRecord = records.find(d => d.Class == classNumber && d.Subject === subject && d.Chapter === chapter && d.Board === board)
        mySet.add(filteredRecord['Description'])
        return Array.from(mySet);
    }

    static getClassesForBoard(board){
        let mySet = new Set();
        let contentJson = contents
        let records = contentJson.content.record;
        let filteredRecords = records.filter(d => d.Board === board)
        filteredRecords.map((item) => mySet.add(item['Class']));
        
        return Array.from(mySet);
    }

    static getClassCategory(board,classNum){
        let mySet = new Set();
        let contentJson = contents
        let records = contentJson.content.record;
        let filteredRecord = records.find(d => d.Board === board && d.Class== classNum)
        mySet.add(filteredRecord['ClassCategory']);
        
        return Array.from(mySet);
    }

    static getAllBoards(){
        let contentJson = contents
        let boards = this.getUniqueTagValues('Board',contentJson)
        return boards;
    }

    static getAllSubjects(board,classNum){
        let mySet = new Set();
        // let jsonArray = contents
        let records = contents.content.record;
        let filteredRecords = records.filter(d => d.Class == classNum && d.Board === board)
        filteredRecords.map((item) => mySet.add(item['Subject']))
        return Array.from(mySet);  
    }

    static getSubjectDescription(board,classNum,subject){
        return subject;
    }

    
}

export default ContentProcessor

