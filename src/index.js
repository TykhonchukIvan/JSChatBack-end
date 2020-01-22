import WServer from './WServer';

const init = () => {
    const port = process.env.PORT || 9001;
    const ws = new WServer(port);

    ws.startServer();
};

init();