import styled from "styled-components";

export const Inner_warpper = styled.div`
  position: relative;

`
export const Inner_grid = styled.div`
width:1190px;
margin:0 auto;
height:480px;
position: relative;
`
export const Inner_left = styled.div`
    position: relative;
    float: left;
    width:190px;
    height: 480px;
    ul{
      overflow:hidden;
      padding:10px 0;
      height:450px;
      background:#fefefe;
      color:#636363;
      margin-top:10px;
    }
    li{
      padding-left: 18px;
      height: 25px;
      line-height: 25px;
      font-size:15px;
    }
    li:hover{
      background:#d9d9d9;
    }
    .li_back{
      background:#d9d9d9;
    }
  .J_FOCUS2{
    z-index:2;
    display:none;
    overflow:hidden;
    position:absolute;
    top:10px;
    left:190px;
    width:800px;
    height:470px;
    border:1px solid #ddd;
    background:#fefefe;
}
.none{
  display:none;
}
.active{
  display:block;
}
.cate_part{
  margin-top:20px;
  font-size:12px;
dl{
  position:relative;
  padding-left: 80px;
}
dt{
  color: #333;
  color:black;
  overflow: hidden;
    position: absolute;
    left: 0;
    top: 6px;
    width: 70px;
    text-align: right;
    font-weight: 700;
    white-space: nowrap;
    text-overflow: ellipsis;
}
dd{
  color:#666;
  overflow: hidden;
  padding: 5px 0;
}
a{
  margin-left:10px;
  float: left;
    margin: 3px 0;
    padding: 0 5px;
    height: 14px;
    line-height: 10px;
    white-space: nowrap;
}
    }
    
`
export const Inner_Swiper = styled.div`
float:left;
width:590px;
height:470px;
padding-left:10px;
padding-top:10px;
.swiper-container{
  --swiper-navigation-size:12px;
  --swiper-theme-color: rgba(255,255,255,1);
  
}
.swiper-button-prev{
  margin-left:-10px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.swiper-button-next{
  margin-right:-10px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.button{
  width: 25px;
  height: 35px;
  color:#fff;
  background-color: rgba(0,0,0,.15);
}
.swiper-pagination-bullet{
  border: 1px solid rgba(0,0,0,.1);
}
.swiper-pagination{
  text-align:left;
  left:20px;
  bottom:15px;
}
`
export const Inner_swiper1 = styled.div`
float:left;
width: 190px;
height: 470px;
padding-left:10px;
padding-top:10px;

  .swiper-container{
    --swiper-navigation-size:12px;
  --swiper-theme-color: rgba(255,255,255,1);
    width: 100%;
    height: 100%;
    }
    img{
    height: 150px;
    display: block;
    margin-bottom: 10px;
    }

    .swiper-button-prev{
  margin-left:-10px;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
}
.swiper-button-next{
  margin-right:-10px;
  border-top-left-radius: 18px;
  border-bottom-left-radius: 18px;
}
.button{
  width: 25px;
  height: 35px;
  color:#fff;
  background-color: rgba(0,0,0,.15);
  transition: all .2s ease;
  opacity: 0;
}
.swiper-container:hover .button{
  opacity: 1;
}
`
export const Inner_FOCUS3 = styled.div`
    position: relative;
    float: right;
    width: 190px;
    height: 470px;
    z-index: 1;
    background:#fefefe;
    margin-top:10px;
    .userinner{
    position: relative;
    padding-top: 67px;
    height: 35px;
    }
    .userinner::after{
    position: absolute;
    height: 3px;
    left: 1px;
    right: 1px;
    background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
    background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
    content: " ";
    bottom: 0;
    }
    .useravatar{
    height: 102px;
    background: #fff;
    overflow: hidden;
    }
    .userlogo{
    position: absolute;
    display:block;
    left: 20px;
    top: 13px;
    img{
    width: 44px;
    height: 44px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    -webkit-box-shadow: 0 2px 8px rgba(0,0,0,.05);
    box-shadow: 0 2px 8px rgba(0,0,0,.05);
    }
    }
    .username{
    position: absolute;
    top: 22px;
    left: 80px;
    right: 10px;
    font-size:12px;
    p{
    overflow: hidden;
    height: 20px;
    line-height: 20px;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666;
    }
    }
    .userprofit{
    height: 25px;
    font-size: 0;
    text-align: center;
    }
    .userprofit a:hover {
    background-color: #c81623;
    color: #fff;
    }
    .userprofit_lk{
    display: inline-block;
    margin: 0 5px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    border-radius: 13px;
    background: #e1251b;
    -webkit-transition: background .3s ease,color .3s ease;
    transition: background .3s ease,color .3s ease;
    }
    .userprofit_lk_plus {
    background: #363634;
    color: #e5d790;
}
.news {
    overflow: hidden;
    height: 130px;
    background: #fff;
    .news_hd{
    height: 20px;
    padding: 10px 0 0;
    position: relative;
    line-height: 20px;
    font-size: 0;
    margin-bottom: 8px;
      .news_tit{
      display: inline-block;
      font-size: 14px;
      margin-left: 15px;
      color: #333;
      font-weight: bold;
      }
      .news_more{
      position: absolute;
      right: 15px;
      top: 10px;
      font-size: 12px;
      color: #999;
      }
}
.news_list{
    position: relative;
    margin: 0 15px;
    height: 90px;
    font-size:12px;
    .news_item{
      max-width: 160px;
      width: 160px;
      height: 16px;
      line-height: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #666;
      margin-bottom: 6px;
      .news_tag{
      display: inline-block;
      position: relative;
      font-size: 12px;
      height: 16px;
      width: 35px;
      line-height: 16px;
      text-align: center;
      vertical-align: 0;
      color: #e1251b;
      background-color: rgba(225,37,27,.08);
      margin-right: 6px;
      }
}
}
.news_list::after{
    position: absolute;
    height: 3px;
    left: 1px;
    right: 1px;
    background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
    background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
    content: " ";
    bottom: 0px;
    }
}
.service{
    overflow: hidden;
    position: relative;
    height: 238px;
    .service_entry{
      overflow: hidden;
      padding: 5px .5px;
      background: #fff;
      .service_list{
        padding-top: 5px;
        height: 225px;

        .service_item{
          position: relative;
          float: left;
          width: 63px;
          height: 55px;
          background: #fff;
          text-align: center;
          overflow: hidden;
          .service_lk{
            display: block;
            position: relative;
            cursor: pointer;
            -webkit-transition: all .2s linear;
            transition: all .2s linear;
            width: 28px;
            height: 28px;
            margin: 0 auto;
            .service_ico_img,.service_ico_img_hover{
              width: 28px;
              height: 28px;
            }
            .service_ico_img_hover{
              position: absolute;
              top: 0;
              left: 0;
              visibility: hidden;
              opacity: 0;
              -webkit-transition: all .2s ease;
              transition: all .2s ease;
            }
          }
          .service_txt{
              display: block;
              font-size:12px;
              height: 25px;
              line-height: 25px;
              border-bottom: 2px solid #fff;
              color: #333;
              -webkit-transition: color .15s ease;
              transition: color .15s ease;
            }
        }
        .service_item:hover .service_ico_img_hover {
            visibility: visible;
            opacity: 1;
            }
        .service_item:hover .service_txt{
            color:red;
          }
      }
  }
}


`