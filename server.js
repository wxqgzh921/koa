const koa = require('koa')
const app = new koa() 

// app.use(async(ctx) => {
//     ctx.body = 'hello koa'
// })

//135642(页面显示)
app.use(async(ctx,next) =>{
    ctx.body = '1'
    //next() //同步（下一个中间件）
    // setTimeout(()=>{
    //     next()
    // },2000)
    ctx.body = ctx.body + '2'
})
app.use(async(ctx,next) =>{
    ctx.body += '3'
    next()
    ctx.body +='4'
})
app.use(async(ctx,next) =>{
    ctx.body += '5'
    next()
    ctx.body +='6'
})

app.listen(3000)