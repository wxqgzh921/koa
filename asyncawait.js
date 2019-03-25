import { resolve } from "dns";

// function ajax(fn){
//     setTimeout(()=>{
//         console.log('你好')
//         fn()
//     },1000)
// }
//callback回调地狱 
// ajax(()=>{
//     console.log('执行结束')
//     ajax(()=>{
//         ajax(()=>{
            
//         })
//     })
// })
// console.log('执行结束')


//异步处理  1.callback  2.promise

function delay(word){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove('hello' + word)
        },2000)
    })
}
delay('孙悟空')
    .then((word)=>{
        console.log(word)
        // return delay('猪八戒')
    })
    // .then((wold)=>{
    //     console.log(wold)
    // })
