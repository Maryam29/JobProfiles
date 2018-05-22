const MongoClient = require("mongodb").MongoClient;
ObjectID = require('mongodb').ObjectID;
var _db;

const connectoToServer = (callback)=>{
var url = 'mongodb://localhost:27017/';
MongoClient.connect(url,(err,db)=>{
    _db = db.db("crewmanagementportal");
    return callback(err);
});
}

const getDb = ()=>{
    return _db;
}

const insertOne = async(col, obj)=>{
    try{
        const results = await _db.collection(col).insertOne(obj);
        //console.log(results.ops[0])
        return results.ops[0];
    }
    catch(e){
        throw e;
    }
}


const updateOne = async(col,oldval, newval)=>{
    try{
        const results = await _db.collection(col).updateOne(oldval,newval);
        //console.log(results.result.nModified);
        return results.result.nModified;
    }
    catch(e){
        throw e;
    }
}


const getAll = async(col)=>{
    try {
        const results = await _db.collection(col).find().toArray()
        return results
    } catch (e) {
        throw e
    }
}

const findOne = async(col, id)=>{
    try {
        const results = await _db.collection(col).findOne(id);
        return results
    } catch (e) {
        throw e
    }
}

const findAll = async(col,id)=>{
    try {
        const results = await _db.collection(col).find(id).toArray();
        return results
    } catch (e) {
        throw e
    }
}

const findOneAndUpdate = async(col,oldval, newval)=>{
    try {
        const results = await _db.collection(col).findOneAndUpdate(oldval,newval,{
            returnNewDocument : true
        });;
        return results
    } catch (e) {
        throw e
    }
}

const disconnectDB = () => _db.close()

module.exports = {
    connectoToServer,
    getDb,
    insertOne,
    updateOne,
    getAll,
    findOne,
    findAll,
    findOneAndUpdate,
    ObjectID
    };