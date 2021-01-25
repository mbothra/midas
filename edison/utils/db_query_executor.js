import Database from './db_utils'
import CommonUtils from './common_utils'
import moment from 'moment'

format = "YYYY-MM-DD HH:mm:ss"

const boards_insert_queries = [['1','MSB'],['2','MBSE'],['3','GBSE'],['4','CBSE'],['5','ICSE']]
const classes_insert_queries = [['1','1','1']]
const subjects_insert_queries = [['1','1','Marathi']]
const chapters_insert_quotes = [['1','1','Chapter: 1-Yet Ani Yet Nahi','Yet Ani Yet Nahi is a story about two girls'],
['2','1','Chapter: 2-Yamuchi Safar','Yamuchi Safar is poem about yamu'],
['3','1','Chapter: 3-Tahanlela Kavla','Tahanlela Kavla is story about thrusty crow'],
['4','1','Chapter: 4-Lapachapi','Lapachapi is story about game']]

class QueryExecutor  {
    constructor(){

    }

    insert_boards = () => {
        query = 'INSERT INTO boards (id ,board_name) values (?,?)'
        readQuery = 'SELECT * FROM boards'
        Database.read(readQuery, null, null, null)
        boards_insert_queries.map((value) => {
            Database.write(query,value)
        })

    }

    insert_classes = () => {
        query = 'INSERT INTO classes (id,board_id,class_name) values (?,?,?)'
        readQuery = 'SELECT * FROM classes'
        Database.read(readQuery, null, null, null)
        classes_insert_queries.map((value) => {
            Database.write(query,value)
        })
    }

    insert_subjects = () => {
        query = 'INSERT INTO subjects (id,class_id,subject_name) values (?,?,?)'
        readQuery = 'SELECT * FROM subjects'
        Database.read(readQuery, null, null, null)
        subjects_insert_queries.map((value) => {
            Database.write(query,value)
        })
    }

    insert_chapters = () => {
        query = 'INSERT INTO chapters (id,subject_id,chapter_name,description) values (?,?,?,?)'
        readQuery = 'SELECT * FROM chapters'
        Database.read(readQuery, null, null, null)
        chapters_insert_quotes.map((value) => {
            Database.write(query,value)
        })
    }

    getAllBoards = async() => {
        return Database.executeSql('SELECT * FROM boards',null)
            .then((res) =>  Promise.resolve(res))
            .catch((err) => Promise.reject(err));
        return boards;
        // return new Promise((resolve) => {
        //     const products = [];
        //     this.initDB().then((db) => {
        //     db.transaction((tx) => {
        //         tx.executeSql('SELECT p.prodId, p.prodName, p.prodImage FROM Product p', []).then(([tx,results]) => {
        //         console.log("Query completed");
        //         var len = results.rows.length;
        //         for (let i = 0; i < len; i++) {
        //             let row = results.rows.item(i);
        //             console.log(`Prod ID: ${row.prodId}, Prod Name: ${row.prodName}`)
        //             const { prodId, prodName, prodImage } = row;
        //             products.push({
        //             prodId,
        //             prodName,
        //             prodImage
        //             });
        //         }
        //         console.log(products);
        //         resolve(products);
        //         });
        //     }).then((result) => {
        //         this.closeDatabase(db);
        //     }).catch((err) => {
        //         console.log(err);
        //     });
        //     }).catch((err) => {
        //     console.log(err);
        //     });
        // });  
          
        
    }


}

module.exports = new QueryExecutor();