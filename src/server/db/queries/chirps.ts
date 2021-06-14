import * as mysql from 'mysql';
import { Router } from 'express';

const router = Router();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'todos_app',
    password: 'todos_app',
    database: 'todos_app',
    port: 3305
})

export const query = (query: string, values?: any) => {
    return new Promise((resolve, reject)=> {
        pool.query(query, (err,results)=> {
            if(err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const getChirps = () => {
    let query = `Select * from chirps;`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}


const getChirp = (id: number) => {
    let query = `Select * from chirps where id = ${id};`;
    return new Promise((resolve, reject) => {
    pool.query(query, (err, results, fields) => {
        if (err) reject(err);
        resolve(results);
     });
    })
}

const deleteChirps = (id) => {
    let query = `Delete from chirps where id = ${id};`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}


const editChirps = (id, text) => {
    let query = `Update chirps set text = '${text}' where id = ${id};`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) reject();
            resolve(results);
        })
    });
}


const postChirps = (text) => {
    let query = `Insert into chirps (userid, text) values (1, '${text}');`;
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results, fields) => {
            if (err) reject(err);
            resolve(results);
        })
    });
}

export {
getChirp,
getChirps,
deleteChirps,
editChirps,
postChirps,
pool,
router
}