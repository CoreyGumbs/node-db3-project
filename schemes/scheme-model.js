 const db = require('../data/dbConfig');
 
 module.exports = {
     find,
     findById
 }

 function find(){
     return db('schemes');
 };

 function findById(id){
     return db('schemes').where({id});
 };

 function findSteps(id){
    return '';
 };

 function add(schemeData){
     return '';
 }

 function remove(id){
     return '';
 }