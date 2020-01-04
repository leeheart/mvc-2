import "./app2.css";
import Vue from 'vue'

const init = (el)=>{
  new Vue({
    el: el,
    data:{
      index: 0
    },
    template:`
      <section id='app2'>
        <ol class="tab-bar">
          <li :class="index === 0?'selected':''" @click='index=0'>111</li>
          <li :class="index === 1?'selected':''" @click='index=1'>222</li>
        </ol>
        <ol class="tab-content">
          <li :class="index === 0?'active':''">内容1</li>
          <li :class="index === 1?'active':''">内容2</li>
        </ol>
      </section>
    `
  })
  // new View( {
  //   el: el,
  //   data: m.data,
  //   html: (index)=>{
  //     return `
  //     <div>
  //       <ol class="tab-bar">
  //         <li class="${index === 0?'selected':''}" data-index="0">111</li>
  //         <li class="${index === 1?'selected':''}" data-index="1">222</li>
  //       </ol>
  //       <ol class="tab-content">
  //         <li class="${index === 0?'active':''}">内容1</li>
  //         <li class="${index === 1?'active':''}">内容2</li>
  //       </ol>
  //     </div>
  //   `},
  //   render(data) {
  //     const index = data.index
  //     if (this.el.children.length !== 0) {
  //       this.el.empty();
  //     }
  //     $(this.html(index)).appendTo(this.el);
  //   },
  //   events: {
  //     'click .tab-bar li': 'x'
  //   },
  //   x(e){
  //     const index = parseInt(e.currentTarget.dataset.index)
  //     m.update({index: index})
  //   }
  // })
}

export default init