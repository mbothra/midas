'use strict';

var database_name = "midas.db";
var database_version = "1.0";
var database_displayname = "midas";
var database_size = 200000;
import * as SQLite from 'expo-sqlite';

let conn = SQLite.openDatabase(database_name, database_version, database_displayname, database_size);

const create_table_queries = [
    'PRAGMA foreign_keys = ON',
    'CREATE TABLE IF NOT EXISTS boards (id INTEGER PRIMARY KEY AUTOINCREMENT, board_name TEXT)',
    'CREATE TABLE IF NOT EXISTS classes (id INTEGER PRIMARY KEY AUTOINCREMENT, board_id INT REFERENCES boards(id), class_name TEXT)',
    'CREATE TABLE IF NOT EXISTS subjects (id INTEGER PRIMARY KEY AUTOINCREMENT, class_id INT REFERENCES classes(id), subject_name TEXT)',
    'CREATE TABLE IF NOT EXISTS chapters (id INTEGER PRIMARY KEY AUTOINCREMENT, subject_id INT REFERENCES classes(class_id), chapter_name TEXT , description TEXT)',
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT, password TEXT, school TEXT, address TEXT)',
    'CREATE TABLE IF NOT EXISTS login_info (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INT REFERENCES users(id), login_time TEXT, login_status TEXT)',
]

class Database  {
    constructor(){
        conn.transaction(tx => {
            create_table_queries.map((query) => {
                tx.executeSql(query) 
            })
        })
    }
    getConnection() {
        return conn;
    }
    write(query, paramsList, class_obj, state_name){
        //query (values to be replaced to be used as ?)
        //paramsList list of values to be replaced in place of question mark
        //example query = INSERT INTO items (text, count) values (?, ?)
        //paramsList = ['gibberish', 0]
        conn.transaction(tx => {
            tx.executeSql(query, paramsList,
            (txObj, obj) => { class_obj.setState({[state_name]:obj})},
            (txObj, error) => console.log('Error', error))
        })
    }
    read(query, paramsList, class_obj, state_name){
        let resultSet
        conn.transaction(tx => {
            tx.executeSql(query, paramsList,
              (txObj, obj) => { class_obj.setState({[state_name]:obj})}, 
              (txObj, error) => console.log('Error ', error)
              )
          })
    }
}

module.exports = new Database();