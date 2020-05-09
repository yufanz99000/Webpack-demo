import './style.css'
import './x.scss'
import './y.less'

export default 'xxx'

const div = document.getElementById('app')
div.innerHTML = `hello,i am lazy`

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