import http from 'http';
import io from 'socket.io';
import App from './App';

class WServer {
    constructor(port) {
        this._port = port;

        this._app = new App();
        this._server = http.createServer(null, this._app.getApp());
        this._io = io(this._server, {serveClient: false});

        this._io.on('connection', this.handleCon.bind(this));
        this._online = [];
        this._users = [];
    }

    handleCon = socket => {
        this._online.push(socket);
        console.log('----connected');


        socket.on('message', data => {
            this._io.sockets.emit('message', data);
        });

        socket.on('online', data => {
            this._users.push(JSON.parse(data));

            let onlineusers = [...this._users];

            this._io.sockets.emit('online', JSON.stringify(onlineusers));
        });

        socket.on('disconnect', data => {
            let disconnect = this._online.indexOf(socket);

            this._online.splice(disconnect, 1);
            this._users.splice(disconnect, 1);

            console.log(this._users, '-------disconnect');
        });
    }

    startServer = () => this._server.listen(this._port, console.log('SERVER HAS BEEN STARTED ON PORT:', this._port));
}

export default WServer;