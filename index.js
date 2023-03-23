import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
const port = 3000
let app = express();
let router = express.Router()


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    let bot = Telegraf("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");
    bot.on(message('text'), (ctx) => {
        ctx.reply('ok apapapun itu')
    })
    bot.launch()
    console.log(req.json);
    console.log('post called');
    return res.json(req.body);
})

app.get('/', (req, res) => {
    
    return res.json('ok');
})

app.listen(port, () => {
    console.log('server running')
})
