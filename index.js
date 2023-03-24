import bodyParser from "body-parser";
import express from "express";
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
const port = 3000
let app = express();

let bot = new Telegraf("6150107976:AAEha3FUSQFDDdNpkUH4JMBIiy3rqzvHzYA");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bot.webhookCallback('/secret-path'));
// bot.telegram.setWebhook('https://bot-netlify.vercel.app/secret-path');


// app.post('/secret-path', (req, res) => {
    
//     bot.on(message('text'), (ctx) => {
//         return ctx.reply('zulkarnen sangat ganteng')
//     })

//     bot.launch();
// })


app.post('/', (req, res) => {
   

})



app.post('/test/hook/path', (req, res) => {
    
    try {
        bot.on(message('text'), (ctx) => {
            return ctx.reply(`server vercel ${ctx.message.text}`)
        })
    } catch (err) {
        console.error(err.message)
    }
    
   

})


app.get('/', (req, res) => {
    
})

bot.launch({
    webhook: { 
        domain: "https://bot-netlify.vercel.app",
        port:8000,
        hookPath:"/test/hook/path"
    }
})


app.listen(port, () => {
    console.log('server running')
})
