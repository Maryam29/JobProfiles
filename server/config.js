const mysql = require("mysql");

class Database {
    constructor() {
        const  config = {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'pac',
            dateStrings: 'date'
            }
        this.connection = mysql.createConnection( config );
        this.connection.connect((err) => {
        if(!err){
            console.log("Database is connected");
        }
        else{
            throw new Error(err);
        }
    });
    }

        query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                console.log(rows);
                if ( err )
                    return reject( err );
                resolve( rows );
            } );
        } );
    }
    // async query( sql, args ) {
    // await this.connection.query( sql, args, async( err, rows ) => {
    //             if ( err )
    //                 throw new Error(err);
    //             return rows;
    //         } );
    //     return ("Inside Config", rows);
    // }
    async close() {
            this.connection.end( err => {
                if ( err )
                    throw new Error(err);
                return rows;
            } );
    }
}
module.exports = {
Database: Database
};