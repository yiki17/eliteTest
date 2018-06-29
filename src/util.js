export function showModal(title, content) {
    wx.showModal({
        title,
        content
    })
}
export function showToast(title,icon){
    wx.showToast({
       title,
       icon 
    })
}