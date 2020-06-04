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
  }
})