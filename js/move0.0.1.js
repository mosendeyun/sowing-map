function move(ele,targetObj,time,callback){
    if(typeof ele=='string'){
        ele=document.querySelector(ele);
    }
    clearInterval(ele.timer)
    var speedObj={};
    for(var attr in targetObj){
        var init=parseFloat(getStyle(ele,attr));
        speedObj[attr]=(targetObj[attr]-init)/(time/10);
    }
    ele.timer=setInterval(function(){
        for(var attr in targetObj){
            var flag=true;
            var speed=speedObj[attr]
            var init=parseFloat(getStyle(ele,attr));  
            if(attr=='opacity'){
                init*=100;
            }
            init+=speed;
            if((speed<=0 && init<=targetObj[attr])||(speed>=0 && init>=targetObj[attr])){
                init=targetObj[attr]
            }else{
                flag=false;
            }
            if(attr=='opacity'){
                ele.style[attr]=init/100;
            }else{
                ele.style[attr]=init+'px'
            }
            console.log(init)
            if(flag){
                clearInterval(ele.timer)
                if(typeof callback=='function'){
                    callback(ele)
                }
            }
        }
    },10)
}


function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele,null)[attr]
    }else{
        return ele.currentstyle[attr];
    }
}




















// function move(ele,attr,target,time){

//     if(typeof ele=='string'){
//         ele=document.querySelector(ele);
//     }
//     clearInterval(ele.timer)
//     var init=parseFloat(getStyle(ele,attr));
//     if(attr=='opacity'){
//         init*=100;
//     }
//     var speed=(target-init)/(time/10);
//     ele.timer=setInterval(function(){
//         init+=speed;
//         if((speed>=0 && init>=target)||(speed<=0 && init<=target)){
//             init=target;
//             clearInterval(ele.timer);
//         }
//         if(attr=='opacity'){
//             ele.style[attr]=init/100;
//         }else{
//             ele.style[attr]=init+'px';
//         }
//     },10)

// }
// function getStyle(ele,attr){
//     if(window.getComputedStyle){
//         return window.getComputedStyle(ele,null)[attr]
//     }
//     return ele.currentstyle[attr];
// }