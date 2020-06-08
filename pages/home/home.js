Page({
  data:{
    name: 'hello',
    age: 12,
    count: 0,
    students: [
      {name:'xiaoming', age: 18},
      {name:'tom', age: 10},
      {name:'yus', age: 68}
    ],
  },
  add(){
    // this.data.count=this.data.count+1;  错误
    this.setData({
      count:this.data.count+1
    })
  },
  incl(){
    this.setData({
      count: this.data.count-1,
    })
  },
  getuser(event){
    console.log(event)
  },

  //页面加载时
  onLoad(){
    console.log(`onload`)
  },
  //页面初次渲染时
  onReady(){
    console.log(`onready`)
  },
  //页面显示时
  onShow(){
    console.log(`onshow`)
  },
  //页面隐藏
  onHide(){
    console.log(`onhide`)
  },
  //页面跳转被卸载时
  onUnload(){
    console.log(`onunload`)
  }
})