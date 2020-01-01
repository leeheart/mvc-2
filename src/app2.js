import "./app2.css";
import $ from "jquery";
import Model from "./base/Model";

const eventBus = $({});

const localKey = "app2.index";
const m = new Model({
  data: {
    index: parseInt(localStorage.getItem(localKey)) || 0
  },
  update(data) {
    Object.assign(m.data, data);
    eventBus.trigger("m:updated");
    localStorage.setItem(localKey, m.data.index);
  }
})

const view = {
  init(el) {
    view.el = $(el)
    view.render(m.data.index) //第一次 view = render(data)
    view.autoBindEvents()
    eventBus.on('m:updated', ()=>{
      view.render(m.data.index)
    })
  },
  el: null, //el为容器，由用户传入
  html: (index)=>{
    return `
    <div>
      <ol class="tab-bar">
        <li class="${index === 0?'selected':''}" data-index="0">111</li>
        <li class="${index === 1?'selected':''}" data-index="1">222</li>
      </ol>
      <ol class="tab-content">
        <li class="${index === 0?'active':''}">内容1</li>
        <li class="${index === 1?'active':''}">内容2</li>
      </ol>
    </div>
  `},
  render(index) {
    if (view.el.children.length !== 0) {
      view.el.empty();
    }
    $(view.html(index)).appendTo(view.el);
  },
  events: {
    'click .tab-bar li': 'x'
  },
  x(e){
    const index = parseInt(e.currentTarget.dataset.index)
    m.update({index: index})
  },
  autoBindEvents(){
    for(let key in view.events){
      const value = view[view.events[key]]
      const spaceIndex = key.indexOf(' ')
      const part1 = key.slice(0, spaceIndex)
      const part2 = key.slice(spaceIndex + 1)
      view.el.on(part1, part2, value)
    }
  }
};

export default view