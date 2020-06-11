import { MongoClient } from 'mongodb';

class Mongodb {
    constructor() {
        const url = 'mongodb://0c8cd35cea23579201b50eb7b5711712:1q2w3e4r@9a.mongo.evennode.com:27017/0c8cd35cea23579201b50eb7b5711712';
        const dbOpt = { useNewUrlParser: true, useUnifiedTopology: true };
        const dbName = '0c8cd35cea23579201b50eb7b5711712';
        this._db;

        MongoClient.connect(url, dbOpt, (err, client) => {
            if (err) {
                return console.log(err);
            }

            console.log('Connection successfully');
            this._db = client.db(dbName);
        });
    }

    getUsers = (req, res) => {
        this._db.collection('Users').find().toArray((error, result) => {
            res.json({users: result});
            res.end();
        });
    }
}

export default Mongodb;
