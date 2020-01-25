class Model {
    constructor() {
        this._online = [];
        this._admin = [{login: 'admin', password: 'admin'}];
        this._persons = [
            {name: 'Vanya', ip: '178.54.185.182'},
            {name: 'Ivan', ip: '178.54.185.182'},
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