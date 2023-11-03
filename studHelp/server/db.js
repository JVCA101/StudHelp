import { createRequire } from "module";
const require = createRequire(import.meta.url);

export async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:1234@127.0.0.1:3306/StudHelp");
    //mysql://user:password@host:port/database
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

export async function selectStudents(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM student_tb;');
    return rows;
}