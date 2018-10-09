var swiper=(function(){
    var timer=null;
    return{
        init(){
            this.$boxShow=document.querySelector('.box-show')
            this.$boxBtn=document.querySelector('.box-btn');
            this.$allLi=this.$boxBtn.querySelectorAll('li')
            this.$left=document.querySelector('.left');
            this.$right=document.querySelector('.right');
            this.index=0;
            for(var i=0;i<this.$allLi.length;i++){
                this.$allLi[i].index=i
            }
            var $first=this.$boxShow.firstElementChild;
            var $last=this.$boxShow.lastElementChild.cloneNode(true);
            this.$boxShow.appendChild($first.cloneNode(true))
            this.$boxShow.insertBefore($last,$first);
            this.$boxShow.style.left='-670px'
            this.event();
            this.autoplay()
        },
        event(){
            var _this=this;
            this.$boxBtn.onclick=function(ev){
                ev=ev||window.event;
                var target=ev.target||ev.srcElement;
                if(target.nodeName=='LI'){
                    _this.index=target.index
                    _this.showImage(target.index)
                    _this.autoplay(target.index)
                }
            }
            this.$left.onclick=function(){
                               console.log(1)
                 _this.showImage(--_this.index)
                }
             this.$right.onclick=function(){
                 _this.showImage(++_this.index)
                 }
        },
        showImage(index){
            if(index<0){
                index=5;
                this.$boxShow.style.left=-670*(index*7)
            }else if(index>5){
                index=0;
                this.$boxShow.style.left=0
            }
            this.index=index;
            for(var j=0;j<this.$allLi.length;j++){
                this.$allLi[j].removeAttribute('class')
            }
            this.$allLi[index].className='active'
            move(this.$boxShow,'left',-670*(index+1))
        },
        autoplay(){
            clearInterval(timer)
            var _this=this
            timer=setInterval(function(){
                _this.index++
                _this.showImage(_this.index)
            },1000)
        }

    }
}())


// var swiper=(function(){
//     var timer=null
//     return{
//         init:function(){
//             this.$boxShow=document.querySelector('.box-show')
//             this.$boxBtn=document.querySelector('.box-btn');
//             this.$allLi=this.$boxBtn.querySelectorAll('li')
//             this.$left=document.querySelector('.left');
//             this.$right=document.querySelector('.right');
//             this.index=0;
//             for(var i=0;i<this.$allLi.length;i++){
//                 this.$allLi[i].index=i;
//             }
//             var $first=this.$boxShow.firstElementChild
//             var $last=this.$boxShow.lastElementChild.cloneNode(true)
//             this.$boxShow.appendChild($first.cloneNode(true))
//             this.$boxShow.insertBefore($last,$first)
//             this.$boxShow.style.left='-670px'
            
//             this.event()
//             this.autoplay()
           
//         },
//         event:function(){
//            var _this=this
//            this.$boxBtn.onclick=function(ev){
//                ev=ev||window.event;
//                var target=ev.target||ev.srcElement;
//                if(target.nodeName=='LI'){
//                    _this.index=target.index
//                    _this.showImage(target.index)
//                 //    console.log(target.index)
//                 _this.autoplay(target.index)
//                }
//            }
//            this.$left.onclick=function(){
//                console.log(1)
//            _this.showImage(--_this.index)
//            }
//            this.$right.onclick=function(){
//                _this.showImage(++_this.index)
//            }
//         },
//         showImage:function(index){
//             if(index>5){
//                 index=0
//                 this.$boxShow.style.left=0;
//             }else if(index<0){
                
//                 index=5;
//                 this.$boxShow.style.left=-670*7+'px'
                
//             }
            
//             this.index=index
//             for(var j=0;j<this.$allLi.length;j++){
//                 this.$allLi[j].removeAttribute('class')
//             }
//             this.$allLi[index].className='active';
//             move(this.$boxShow,'left',-670*(index+1))
//         },
//         autoplay:function(index){
//             clearInterval(timer)
//             var _this=this
//             timer=setInterval(function(){
//                 _this.index++             
//                 _this.showImage(_this.index)
//             },1000)
          
//         }
//     }
// }())
swiper.init()