import { parse } from 'fast-xml-parser';
import {MidasStyles,xml_data} from '../constants/'

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

    static getSubjectsForClass(classNumber){
        let mySet = new Set();
        let jsonArray = parse(xml_data);
        let records = jsonArray.content.record;
        let filteredRecords = records.filter(d => d.Class == classNumber)
        filteredRecords.map((item) => mySet.add(item['Subject']))
        return Array.from(mySet);     
    }

    static getChaptersForClassAndSubject(classNumber,subject){
        let mySet = new Set();
        let jsonArray = parse(xml_data);
        let records = jsonArray.content.record;
        let filteredRecords = records.filter(d => d.Class == classNumber && d.Subject === subject)
        filteredRecords.map((item) => mySet.add(item['Chapter']))
        return Array.from(mySet);
    }

    static getDesciptionForChapter(chapter,classNumber,subject){
        let mySet = new Set();
        let jsonArray = parse(xml_data);
        let records = jsonArray.content.record;
        let filteredRecords = records.filter(d => d.Class == classNumber && d.Subject === subject && d.Chapter === chapter)
        filteredRecords.map((item) => mySet.add(item['Description']))
        return Array.from(mySet);
    }

    static getAllClasses(){
        let contentJson = parse(xml_data);
        let classes = this.getUniqueTagValues('Class',contentJson)
        return classes;
    }

    
}

export default ContentProcessor

