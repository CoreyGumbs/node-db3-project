 const db = require('../data/dbConfig');
 
 module.exports = {
     find,
     findById,
     findSteps
 }

 function find(){
     return db('schemes');
 };

 function findById(id){
     return db('schemes').where('id', id);
 };

 function findSteps(id){
    return db('steps')
    .join('schemes as s', 's.id', 'steps.scheme_id')
    .select('steps.id','steps.step_number', 'steps.instructions', 's.scheme_name')
    .where('steps.scheme_id', id);
 };

 function add(schemeData){
     return '';
 }

 function remove(id){
     return '';
 }