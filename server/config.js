const MongoClient = require("mongodb").MongoClient;
ObjectID = require('mongodb').ObjectID;
var _db;

const connectToServer = (callback)=>{
var url = 'mongodb://localhost:27017/crewmanagementportal';
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

const findAllByID = async(col,id)=>{
    try {
        console.log(id);
        const results = await _db.collection(col).find(id).toArray();
        console.log(results);
        return results
    } catch (e) {
        throw e
    }
}

const findOneAndUpdate = async(col,oldval, newval)=>{
    try {
        const results = await _db.collection(col).findOneAndUpdate(oldval,newval,{
            returnOriginal : false
        });
        //console.log(results);
        return results.value
    } catch (e) {
        throw e
    }
}

const getIfFieldExist = async(col,field)=>{
    try {
        // console.log(col);
        const results = await _db.collection(col).find({"5b8552293763452b047283cd":{$exists:true}}).toArray();
        const results1 = await _db.collection(col).find({field:{$exists:true}}).toArray();
        // console.log(results);
        // console.log(results1);
        return results
    } catch (e) {
        throw e
    }
}

const updateOrInsert = async(col,oldval, newval)=>{
    try{
        const results = await _db.collection(col).findOneAndUpdate(oldval,newval,{returnNewDocument:true,upsert:true});
        if(results){
            //console.log(results.lastErrorObject.updatedExisting);
            if(results.lastErrorObject.updatedExisting && results.lastErrorObject.n ==1){
                return results.value;
            }
            else if(!results.lastErrorObject.updatedExisting && results.lastErrorObject.n ==1){
                const newrow = await _db.collection(col).findOne({_id:results.lastErrorObject.upserted});
                return newrow;
            }
        }
            return null;
    }
    catch(e){
        throw e;
    }
}

const disconnectDB = () => _db.close()

module.exports = {
    connectToServer,
    getDb,
    insertOne,
    updateOne,
    getAll,
    findOne,
    findAllByID,
    findOneAndUpdate,
    ObjectID,
    updateOrInsert,
    getIfFieldExist
    };