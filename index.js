import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
const port = 3000
let app = express();
let router = express.Router()

let bot = new Telegraf("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");
    bot.on(message('text'), (ctx) => {
        ctx.reply('ok apapapun itu')
    })
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {

    let bot = new Telegraf("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");
    bot.on(message('text'), (ctx) => {
        ctx.reply('ok apapapun itu')
    })
    bot.launch({
        webhook: "https://bot-netlify.vercel.app/",
        port:4000,
    })
    console.log(req.json);
    console.log('post called');
    return res.json(req.body);
})


app.post('/telegraf/:id', (req, res) => {
    bot.on(message('text'), (ctx) => {
        ctx.reply('ok apapapun itu')
    })
    bot.launch()
    console.log('telegraf path called')
    console.log(req.body)
})


app.get('/', (req, res) => {
    return res.json('ok');
})

bot.launch({
    webhook:{ domain: "https://bot-netlify.vercel.app/",
port:8000
}
})

app.listen(port, () => {
    console.log('server running')
})
