import EventBus from "./EventBus"

class Model extends EventBus{
  constructor(options){
    super() //调用EventBus的constructor
    const keys = ['data', 'create', 'delete', 'update', 'get']
    keys.forEach(key=>{
      if(key in options){
        this[key] = options[key]
      }
    })
  }
  create(){
    // ?. 可选链语法（2019信语法）
    console && console.error && console.error('暂未实现')
  }
  delete(){
    console && console.error && console.error('暂未实现')
  }
  update(){
    console && console.error && console.error('暂未实现')
  }
  get(){
    console && console.error && console.error('暂未实现')
  }
}

export default Model