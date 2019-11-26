export default {
  // 判断对象数据类型
  isType=type=>target=>`[object ${type}]` === Object.prototype.toString.call(target),
  // ES5 实现数组 map 方法
  mymap:function(fn,context){
    let arr = Array.prototype.slice.call(this)
    // Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
    let mapedArr = [];
    for(let i=0;i<arr.length;i++){
      if(!arr.hasOwnProperty(i)) continue;
      mapedArr.push(fn.call(context,arr[i],i,this))
    }
    return mapedArr;
  },
  // 使用 reduce 实现数组 map 方法
  mymap2:function(fn,context){
    let arr = Array.prototype.slice.call(this);
    return arr.reduce((pre,cur,index)=>{
      return [...pre,fn.call(context,cur,index,this)]
    },[])
  },
  // 判断浏览器是什么
  gstBrowser:function(){
    let explorer = window.navigator.userAgent;
    let browser;
    if(explorer.indexOf("MSIE")>-1){
      browser = 'ie';
    }else if(explorer.indexOf("Firefox")>-1){
      browser = '火狐';
    }else if(explorer.indexOf("Chrome")>-1){
      browser = 'Chrome';
    }else if(explorer.indexOf("Opera")>-1){
      browser = 'Opera';
    }else if(explorer.indexOf("Safari")>-1){
      browser = 'Safari';
    }
    else if(explorer.indexOf("Netscape")>-1){
      browser = 'Netscape';
    }
  },
};

app.map(item=>{
  item.lll
})

