import x from './x.js '

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick =() => {
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    }, () => {
        console.log('模块引用错误');
    })
}
div.appendChild(button)