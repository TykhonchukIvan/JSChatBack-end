class Model {
    constructor() {
        this._online = [];
        this._admin = [{login: 'admin', password: 'admin' }];
        this._persons = [
            {name: 'Vanya', ip: '178.54.185.182'},
            {name: 'Ivan', ip: '178.54.185.182'},
            {name: 'Musa', ip: '5.197.254.117'},
            {name: 'Emin', ip: '5.197.254.117'},
            {name: 'Musa', ip: '81.21.81.245'},
            {name: 'Dima', ip: '81.21.81.245'},
            {name: 'Nazar', ip: '188.239.11.251'},
            {name: 'Danil', ip: '194.183.167.183'},
            {name: 'Danil', ip: '109.197.219.237'},
            {name: 'Elmar', ip: '81.21.81.245'},
            {name: 'Elmar', ip: '5.197.238.172'},
            {name: 'Murad', ip: '5.197.227.27'},
            {name: 'Sasha', ip: '194.183.167.183'},
            {name: 'Lena', ip: '194.183.167.183'},
            {name: 'Alina', ip: '194.183.167.183'},
            {name: 'Nazar', ip: '194.183.167.183'},
            {name: 'Lena', ip: '194.183.167.183'},
        ];
    }

    setOnline = person => {        
        this._online.push(person);

        console.log(this._online);
    }

    clearOnline = () => this._online = [];

    getOnline = () => [...this._online];

    getPerson = () => [...this._persons];

    getAdmin = () => [...this._admin];
}

export default Model;