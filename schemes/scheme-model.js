 const db = require('../data/dbConfig');
 
 module.exports = {
     find,
     findById,
     findSteps,
     add,
     addStep
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
    .where('steps.scheme_id', id)
    .orderBy('steps.step_number');
 };

 function add(schemeData){
     return db('schemes').insert(schemeData);
 }
 
 function addStep(stepData, id){
    return db('steps')
    .insert(stepData)
    .where('steps.scheme_id', id);
 }

 function update(udpateScheme, id){
    return db('schemes')
    .update(updateScheme)
    .where('schemes.id', id);
 }

 function remove(id){
     return db('schemes')
     .where('schemes.id', id)
     .delete();
 }

