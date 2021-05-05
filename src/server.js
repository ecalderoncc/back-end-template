import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';

const app = express ();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes.forEach(route => {
    app[route.method](route.path, route.handler);
})

//Explicitely defining routes
// app.get('/hello', (req, res) => {
//     res.send("Hellows");
// })

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});