import React, { Component, Fragment } from 'react'
import { J_ng } from './style'
import Swiper from 'swiper/js/swiper.js'

class Swiper_gd extends Component {
      constructor(props){
        super(props)
        
      }
      
      
    componentDidMount(){
    var mySwiper =  new Swiper ('.banner3', {
        autoplay:{
          delay:1,
          disableOnInteraction:false
        },//自动滚动
        speed:3000,
        loop : true,
        slidesPerView : 4,
        slidesPerGroup : 1,
      })
      mySwiper.el.onmouseover = function(){ //鼠标放上暂停轮播
        mySwiper.autoplay.stop();
        mySwiper.passedParams.loop=false;
      }
      mySwiper.el.onmouseleave = function(){
        mySwiper.autoplay.start();
        mySwiper.passedParams.loop=true;
      }
    }
  render() {
    return (
      <Fragment>
        <J_ng>
          <a className="nice_good" />
          <div className="recommends">
            <div className="good-list">
              <div class="swiper-container banner3">
                <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="https://img11.360buyimg.com/mobilecms/s150x150_jfs/t1/72194/27/8696/72998/5d68e026E0be8e2bc/4700397fec70c497.jpg!q70.jpg.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                  <div class="swiper-slide"><img src="https://img20.360buyimg.com/mobilecms/s150x150_jfs/t1/40104/35/14261/69902/5d567150E3dcbfa57/fe8ddd5a769d3b6c.jpg!q70.jpg.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                  <div class="swiper-slide"><img src="https://img20.360buyimg.com/ceco/s150x150_jfs/t1/40617/4/13193/111279/5d64f77cE3df612cc/0b6cd6d19b1aa98a.png.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                  <div class="swiper-slide"><img src="https://img14.360buyimg.com/mobilecms/s150x150_jfs/t1/38722/26/6477/176285/5cd129a0Ed29b5434/5ad0356df176e37f.jpg!q70.jpg.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                  <div class="swiper-slide"><img src="https://img14.360buyimg.com/mobilecms/s150x150_jfs/t1/97097/40/5822/244696/5defec51Ec6c911ab/45214b9e5210f5b4.jpg!q70.jpg.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div></div>
                  <div class="swiper-slide"><img src="https://img30.360buyimg.com/mobilecms/s150x150_jfs/t24823/147/2204643161/37854/63fde2f5/5bc59caeN8de4dd2a.png.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                  <div class="swiper-slide"><img src="https://img20.360buyimg.com/ceco/s150x150_jfs/t1/93938/38/8730/14013/5e07046fE1b8bfa8c/149f05c84a3cc011.jpg!q70.jpg.webp"/>
                  <div>芥末绿 高效 汽油添加剂</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </J_ng>
      </Fragment>
    )
  }
}

export default Swiper_gd;