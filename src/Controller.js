import Model from './Model';

class Controller {
    constructor() {
        this._model = new Model();
        this.check = null;
        this.checkAdmin = null;
    }

    getOnline = () => this._model.getOnline();
    clearOnline = () => this._model.clearOnline();

    searchPerson = data => {
        const persons = this._model.getPerson();
        let status = false;

        persons.forEach(element => {
            this.check = data.name === element.name && data.ip === element.ip;

            if (this.check === true) {
                status = this.check;
                this.setOnline(element);
            }
        });

        return status;
    }

    searchAdmin = data => {
        const admin = this._model.getAdmin();
        let status = false;

        admin.forEach(element => {
            this.checkAdmin = data.login === element.login && data.password === element.password;

            if (this.checkAdmin === true) {
                status = this.checkAdmin;
            }
        });

        return status;
    }

    setOnline = person => {
        const users = this._model.getOnline();

        users.indexOf(person) === -1 ? this._model.setOnline(person) : false;
    }
}

export default Controller;