import path from 'path';
import express from 'express';
import Controller from './Controller';
// import Mongo from './Model-mongoDB';

class App {
    constructor() {
        this._controller = new Controller();
        // this._mongodb = new Mongo();
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));

        //////POST/////////////
        this._app.post('/checkAdmin', this.onPostCheckAdmin);
        this._app.post('/checkUser', this.onPostCheckUser);
        this._app.post('/online', this.onPost);
        
        ///////GET//////////
        this._app.get('/online', this.onGet);
        this._app.get('/getUsers', this.onUsers);
    }

    onUsers = (req, res) => {
        try { 
            this._mongodb.getUsers(req, res);
        } catch (e) {
            res.send(e);
        }
    }

    onPostCheckAdmin = (request, response) => {
        const {body} = request;

        let status = this._controller.searchAdmin(body);
        
        response.end(JSON.stringify({status}));

    };

    onPostCheckUser = (request, response) => {
        const {body} = request;
        let status = this._controller.searchPerson(body);

        response.end(JSON.stringify({status}));
    };

    onGet = (request, response) => {
        const data = this._controller.getOnline();


        response.end(JSON.stringify(data));
    };
    
    onPost = (request, response) => {
        const {body} = request;
        let status = this._controller.searchPerson(body);

        response.end();
    };

    getApp = () => this._app;
}
export default App;