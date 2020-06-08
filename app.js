//app.js
App({

  //页面初始化时
  onLaunch() {
  },
  
  //界面显示出来的周期函数
  onShow(options){
    console.log(`show`);
    console.log(options)
  },

  //界面隐藏时的周期函数
  onHide(){
    console.log(`hide`)
  },

  //发生错误时的周期函数
  onError(){
    console.log(`wrong`)
  },

  globalData: {
    name: 'xming',
    age: 66
  }
  
})