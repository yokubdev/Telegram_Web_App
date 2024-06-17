const { Telegraf } = require("telegraf");
const TOKEN = "7293339745:AAHjMLIbfqKJlox0Gq6aJ5X4yime6JclyaU"; 
const bot = new Telegraf(TOKEN);

const web_link = "https://sevimli-lavash.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Salom , Sevimli lavash buyurtma boti", {
    reply_markup: {
      keyboard: [[{ text: "Order", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
