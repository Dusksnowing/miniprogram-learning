Page({
  data:{
    imgurl:"",
  },
  chooseImage(){
    wx.chooseImage({
      complete: (res) => {
        this.setData({
          imgurl:res.tempFilePaths[0],
        })
      },
    })
  }
  
})