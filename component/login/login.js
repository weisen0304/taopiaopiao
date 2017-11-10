// 组件数据
let _comData = {
    '__lgpanel__.phone':15622633852,
    '__lgpanel__.password':123456,
    '__lgpanel__.isHide':true
}
//组件事件
let _comEvent = {
    __lgpanel_ok:function(){
        console.log('OK')
        this.__lgpanel_hide()
    },
    __lgpanel_cancel:function(){
        console.log('Cancel')
        this.__lgpanel_hide()
    }
}
//方法
let _comMethod = {
    __lgpanel_show:function(){
        this.setData({'__lgpanel__.isHide':false})
    },
    __lgpanel_hide:function(){
        this.setData({'__lgpanel__.isHide':true})
    }
}
//组件类
function LoginPanel(){
    let pages = getCurrentPages()
    let curPage = pages[pages.length - 1]
    //组件中调用页面
    this._page = curPage
    Object.assign(curPage, _comEvent, _comMethod)
    curPage.setData(_comData)

    curPage.loginPanel = this
    return this
}

export { LoginPanel }