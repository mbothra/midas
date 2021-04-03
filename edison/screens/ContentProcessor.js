import { parse } from 'fast-xml-parser';
import Content from '../constants/Content';

const contents = parse(Content.xml_data);
const videosContent = parse(Content.videos_xml);
const syllabusMap = parse(Content.syllabus_xml);

const readingsContent = parse(Content.readings_xml);
const assignmentsContent = parse(Content.assignments_xml);
const quizzesContent = parse(Content.quizzes_xml);

const providers=parse(Content.providers_xml);
const referencesContent=parse(Content.references_xml);

//const boards = QueryExecutor.getAllBoards();

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

    //In case getFromDb is set to false it will get the data from xml file
    static getAllChapters(board,classNum,subject,getFromDb){
        let mySet = new Set();
        let jsonArray = contents
        let records = contents.content.record;
        let filteredRecords = records.filter(d => d.Board === board && d.Class == classNum && d.Subject === subject)
        filteredRecords.map((item) => mySet.add(item['Chapter']))
        return Array.from(mySet);
    }

    static getChapter(board,chapter,classNum,subject){
        let mySet = new Set();
        let jsonArray = contents
        let records = contents.content.record;
        let filteredRecords = records.filter(d => (d.Board === board && d.Class == (parseInt(classNum.replace('Class ',''))) && d.Subject === subject && d.Chapter === chapter));
        
        return filteredRecords[0];
    }

    static getVideosForChapter(board,chapter,classNumber,subject){
        let mySet = new Set();
        let chapter1 = this.getChapter(board,chapter,classNumber,subject);
        let syllabusForChapter = this.getSyllabusMapForChapter(chapter1["ID"]);
        let videoIdArray
        if(syllabusForChapter["Videos"] === undefined){
            return [];
        }
        else if(typeof syllabusForChapter["Videos"] === "number"){
            videoIdArray = [];
            videoIdArray[0] = syllabusForChapter["Videos"];

        }
        else{
            videoIdArray = syllabusForChapter["Videos"].split(",");
        }
        let jsonArray = videosContent;
        let records = jsonArray.content.record;
        for (i = 0; i < videoIdArray.length; i++) {
            let filteredRecord = records.find(d => d.ID==parseInt(videoIdArray[i]));
            mySet.add(filteredRecord);
        }
        return Array.from(mySet);
    }


    static getAssignmentsForChapter(board,chapter,classNumber,subject){
        let mySet = new Set();
        let chapter1 = this.getChapter(board,chapter,classNumber,subject);
        let syllabusForChapter = this.getSyllabusMapForChapter(chapter1["ID"]);
        let assignmentIdArray
        if(syllabusForChapter["Assignments"] === undefined){
            return [];
        }
        else if(typeof syllabusForChapter["Assignments"] === "number"){
            assignmentIdArray = [];
            assignmentIdArray[0] = syllabusForChapter["Assignments"];

        }
        else{
            assignmentIdArray = syllabusForChapter["Assignments"].split(",");
        }

        let jsonArray = assignmentsContent;
        let records = jsonArray.content.record;
        for (i = 0; i < assignmentIdArray.length; i++) {
            let filteredRecord = records.find(d => d.ID==parseInt(assignmentIdArray[i]));
            mySet.add(filteredRecord);
        }
        return Array.from(mySet);
    }

    static getContentProvider(id){

        let jsonArray = providers;
        let records = jsonArray.content.record;

        let filteredRecord = records.find(d => d.ID==parseInt(id));

        return filteredRecord;
    }

    static getReferences(referenceIds){
        let mySet = new Set();
        if(typeof referenceIds === "number"){
            referenceIdArray = [];
            referenceIdArray[0] = referenceIds;
        }else{
            referenceIdArray = referenceIds.split(",");
        }
        let jsonArray = referencesContent;
        let records = jsonArray.content.record;
        for (i = 0; i < referenceIdArray.length; i++) {
            let filteredRecord = records.find(d => d.ID==parseInt(referenceIdArray[i]));
            mySet.add(filteredRecord);
        }
        return Array.from(mySet);
    }

    static getReadingsForChapter(board,chapter,classNumber,subject){
        let mySet = new Set();
        let chapter1 = this.getChapter(board,chapter,classNumber,subject);
        let syllabusForChapter = this.getSyllabusMapForChapter(chapter1["ID"]);
        let readingsIdArray1 = syllabusForChapter["Readings"];
        let readingsIdArray
        if(typeof readingsIdArray1 === "number"){
            readingsIdArray = [];
            readingsIdArray[0] = readingsIdArray1;
        }else{
            readingsIdArray = readingsIdArray1.split(",");
        }

        let jsonArray = readingsContent;
        let records = jsonArray.content.record;
        for (i = 0; i < readingsIdArray.length; i++) {
            let filteredRecord = records.find(d => d.ID==parseInt(readingsIdArray[i]));
            mySet.add(filteredRecord);
        }
        return Array.from(mySet);
    }

    static getQuizzesForChapter(board,chapter,classNumber,subject){
        let mySet = new Set();
        let chapter1 = this.getChapter(board,chapter,classNumber,subject);
        let syllabusForChapter = this.getSyllabusMapForChapter(chapter1["ID"]);
        const quizString = syllabusForChapter["Quizzes"];
        var quizzesIdArray = syllabusForChapter["Quizzes"];
        if(quizzesIdArray === undefined){
            return [];
        }
        else if(typeof quizString === "number"){
            quizzesIdArray = [];
            quizzesIdArray[0] = quizString;
        }else{
            quizzesIdArray = syllabusForChapter["Quizzes"].split(",");
        }
        let jsonArray = quizzesContent;
        let records = jsonArray.content.record;
        for (i = 0; i < quizzesIdArray.length; i++) {
            let filteredRecord = records.find(d => d.ID==parseInt(quizzesIdArray[i]));
            mySet.add(filteredRecord);
        }
        return Array.from(mySet);
    }

    static getSyllabusMapForChapter(chapterId){
        let mySet = new Set();
        let jsonArray = syllabusMap;
        let records = jsonArray.content.record;
        let filteredRecord = records.find(d => (d.ChapterID == chapterId));
       
        return filteredRecord;
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

    async getAllBoardsFromDb(){
        boards = await QueryExecutor.getAllBoards();
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

