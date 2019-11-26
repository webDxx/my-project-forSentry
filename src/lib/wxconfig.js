(function() {
  let isWeixin = false;
  if (isWeixin) {
    const wxurl =
      location.protocol + '//res.wx.qq.com/open/js/jweixin-1.4.0.js';
    let flag = false;
    let isIos = true;
    let initdata; //初始化数据
    let maskEle; //蒙层
    let defaultObj = {
      apiList: [
        'hideMenuItems',
        'showMenuItems',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
      ],
      share: {
        title: '快来加入我的团队！',
        desc: '有共同追求的人才是团队！',
        imgUrl:
          'https://static.rong360.com/upload/jpg/e9/09/e90945955509df41cfdbb8e67bd2ab1d.jpg',
        link: `${location.origin}/hhr/register`,
        success: function() {
          hideMask();
        },
      },
      showItem: [
        'menuItem:share:appMessage',
        'menuItem:share:timeline',
        'menuItem:openWithQQBrowser',
        'menuItem:openWithSafari',
        'menuItem:copyUrl',
      ],
      hideItem: [
        //传播类
        //  "menuItem:share:appMessage",//发送给朋友
        //  "menuItem:share:timeline",分享到朋友圈
        'menuItem:share:qq', //分享到QQ
        'menuItem:share:weiboApp', //分享到Weibo
        'menuItem:favorite', //收藏
        'menuItem:share:facebook', //分享到FB:
        'menuItem:share:QZone', //分享到 QQ 空间
        //保护类
        'menuItem:editTag', //编辑标签
        'menuItem:delete', //删除
        // 'menuItem:copyUrl', //复制链
        'menuItem:originPage', //原网页:
        'menuItem:readMode', //阅读模式:
        // 'menuItem:openWithQQBrowser', //在QQ浏览器中打开
        // "menuItem:openWithSafari",//在Safari中打开
        'menuItem:share:email', //邮件
        'menuItem:share:brand', //一些特殊公众号:
      ],
    };

    // 隐藏蒙层
    function hideMask() {
      if (maskEle) {
        document.body.removeChild(maskEle);
      }
    }
    // 创建蒙层
    function createGuide() {
      maskEle = document.createElement('div');
      maskEle.innerHTML = '<div></div>';
      // 增加蒙层点击事件
      maskEle.onclick = function() {
        document.body.removeChild(maskEle);
      };
      document.body.appendChild(maskEle);
    }
    // 设置微信分享
    function shareConfig(
      data,
      jsApiList,
      hideMenuItem,
      showMenuItems,
      wxShareInfo
    ) {
      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名
        jsApiList: jsApiList, // 必填，需要使用的JS接口列表
      });
      wx.ready(() => {
        wx.hideMenuItems({ menuList: hideMenuItem });
        wx.showMenuItems({ menuList: showMenuItems });
        wx.onMenuShareTimeline(wxShareInfo);
        wx.onMenuShareAppMessage(wxShareInfo);
        // wx.updateAppMessageShareData(wxShareInfo);
        // wx.updateTimelineShareData(wxShareInfo);
      });
      wx.error(function(res) {
        console.log(res);
      });
    }

    // 加载jssdk.js
    loadJs(wxurl, function() {
      let url = encodeURIComponent(location.href.split('#')[0]);
      utils.ajax({
        url: '/api/weixin/Getjssignpackage',
        data: { url: url },
        success: res => {
          if (!+res.status) {
            initdata = res.data;
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: res.data.appId, // 必填，公众号的唯一标识
              timestamp: res.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
              signature: res.data.signature, // 必填，签名
              jsApiList: defaultObj.apiList, // 必填，需要使用的JS接口列表
            });
            wx.ready(() => {
              wx.hideMenuItems({ menuList: defaultObj.hideItem });
              wx.onMenuShareTimeline(defaultObj.share);
              wx.onMenuShareAppMessage(defaultObj.share);
            });
            wx.error(res => {
              console.log(res);
            });
            flag = true;
          }
        },
      });
    });

    /**
     * @param {*} canshare  是否可分享
     * @param {*} share  分享的信息(可不传)
     * @param {*} hideGuide  是否显示指示蒙层（可不传），默认false,显示
     * @param {*} ishistory 是否history模式（可不传）
     * @param {*} apiList  自定义(可不传）
     * @param {*} hideItem  自定义需要隐藏的项 （可不传）{list}:[],type:1} 1 显示自定义项和初始值都有值 2 显示自定义的值和初始值 3覆盖
     */
    let timmer;
    //中心方法
    function wxShare(
      canshare = true,
      share,
      hideGuide,
      ishistory,
      apiList,
      hideItem
    ) {
      if (flag) {
        let jsApiList = apiList || defaultObj.apiList,
          wxShareInfo = Object.assign(defaultObj.share, share),
          hideMenuItem,
          showMenuItems;
        wxShareInfo.imgUrl = wxShareInfo.imgUrl || defaultObj.share.imgUrl;

        if (timmer) clearTimeout(timmer);
        if (canshare) {
          hideMenuItem = !hideItem ? defaultObj.hideItem : hideItem;
          showMenuItems = defaultObj.showItem;
          if (!hideGuide) {
            createGuide();
          }
        } else {
          ishistory = location.href.indexOf('#') > 0 ? false : true;
          jsApiList = ['hideMenuItems', 'showMenuItems'];
          hideMenuItem = defaultObj.hideItem
            .slice(0)
            .concat(['menuItem:share:appMessage', 'menuItem:share:timeline']);
          showMenuItems = [
            'menuItem:openWithQQBrowser',
            'menuItem:openWithSafari',
          ];
        }
        let url = encodeURIComponent(location.href.split('#')[0]);
        if (isIos && ishistory) {
          shareConfig(
            initdata,
            jsApiList,
            hideMenuItem,
            showMenuItems,
            wxShareInfo
          );
        } else {
          utils.ajax({
            url: '/api/weixin/Getjssignpackage',
            data: { url: url },
            success: res => {
              if (!+res.status) {
                shareConfig(
                  res.data,
                  jsApiList,
                  hideMenuItem,
                  showMenuItems,
                  wxShareInfo
                );
              } else {
                console.log(res.msg || res.statusInfo);
              }
            },
            error: res => {
              console.log(res.msg || res.statusInfo);
            },
          });
        }
      } else {
        timmer = setTimeout(() => {
          wxShare(canshare, share, hideGuide, ishistory, apiList, hideItem);
        }, 20);
      }
    }
  } else {
  }
})();
