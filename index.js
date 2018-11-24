const riot = require('riot')
const content = require('./content.tag')
const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = riot.render(content, {
    title: 'I am rendered with riot',
    message: 'Hello there'
  })
})

app.listen(3000)