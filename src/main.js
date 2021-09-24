const div1 = dom.create(`<div>newDiv</div>>`)
document.body.appendChild(div1)
console.log(div1)

dom.after(test,div1)
const div2 = dom.create(`<div>yanyan</div>>`)
document.body.appendChild(div2)
dom.before(test,div2)

dom.append(test,div2)
let div3 = dom.create(`<div>dahao</div>`)
dom.wrap(div3,div2)
// dom.remove(div2)

const node = dom.empty(window.empty)
console.log(node)

dom.attr(div1,'title',`wo shi ni baba`)
const title = dom.attr(div1,'title')
console.log(title)

dom.text(div1,`三生三世`)
const text = dom.text(div1)
console.log(text)

let div_html = dom.create(`<div>吃饭啦</div>`)
dom.html(div_html,`<strong><div>吃完啦</div></strong>`)
document.body.appendChild(div_html)
console.log(dom.html(div_html))

dom.style(div_html,'color','red')
dom.style(div_html,{background: 'black'})
const color = dom.style(div_html,'color')
console.log(`color:${color}`)

dom.class.add(div_html,'red')
dom.class.add(div_html,'blue')
dom.class.remove(div_html,'red')
console.log(dom.class.has(div_html,'blue'))

const fn = () =>{
    console.log('点击了')
}
dom.on(div_html,'click',fn)
dom.off(div_html,'click',fn)

const testDiv = dom.find('#test')[0]
console.log(dom.find('.red',testDiv)[0])

const a = dom.parent(div_html)
console.log(a)

let s = dom.find('#s2')[0]
console.log(dom.children(div_html)[0])

console.log(dom.siblings(dom.find('#s1')[0]))
console.log(dom.next(s))

console.log(dom.previous(s))

const t = dom.find('#travel')[0]
dom.each(dom.children(t),(n) =>dom.style(n,'color','blue'))

console.log(dom.index(t))