//app.js
App({

  //页面初始化时
  onLaunch() {
    // 获取用户信息,异步
    wx.getUserInfo({     
      success: res => {
        console.log(res)
      }
    })
    console.log(`init`)
    setTimeout(()=>{
      const err = new Error;
      throw err;
    }, 2000)
  },
  
  //界面显示出来的周期函数
  onShow(){
    console.log(`show`)
  },

  //界面隐藏时的周期函数
  onHide(){
    console.log(`hide`)
  },

  //发生错误时的周期函数
  onError(){
    console.log(`wrong`)
  }
})