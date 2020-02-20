 const db = require('../data/dbConfig');
 
 module.exports = {
     find,
     findById,
     findSteps,
     add
 }

 function find(){
     return db('schemes');
 };

 function findById(id){
     return db('schemes').where('schemes.id', id);
 };

 function findSteps(id){
    return db('steps')
    .join('schemes as s', 's.id', 'steps.scheme_id')
    .select('steps.id','steps.step_number', 'steps.instructions', 's.scheme_name')
    .where('steps.scheme_id', id);
 };

 function add(schemeData){
     return db('schemes').insert(schemeData);
 }

 function update(changes, id){
    return ''
 }

 function remove(id){
     return db('schemes')
     .where('schemes.id', id)
     .delete();
 }

