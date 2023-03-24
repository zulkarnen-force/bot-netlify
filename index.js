import bodyParser from "body-parser";
import express from "express";
import { Telegraf, Telegram } from "telegraf";
import { message } from "telegraf/filters";

const port = 3000
let app = express();

let bot = new Telegraf("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");
let telegram = new Telegram("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");
// app.use(await bot.createWebhook({domain: ""}))

bot.on(message('text'), ctx => ctx.reply("Hello"));
bot.catch((err) => console.log(err))
bot.launch()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


// app.post('/hook/path', (req, res) => {
//     let from = req.body.message.from
//     let chatId = req.body.message.chat.id;
//     let message = req.body.message.text;
//     telegram.sendMessage(chatId, message);
// })

// app.get('/', (req, res) => {
//     res.json({status: 'ok'})
// })

// bot.on('text', (ctx) => {
//     console.log(ctx)
// })

// bot.launch({
//     webhook: {
//         domain: "https://a018-2001-448a-4042-15d9-109a-b130-cbbd-d255.ap.ngrok.io",
//         hookPath: '/hook/path'
//     }
// })



app.listen(port, () => {
    console.log('server running')
})
