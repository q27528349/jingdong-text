import styled from 'styled-components'

export const Totop_div = styled.div`
position:relative;
width:1903px;
.elevator{
    position: absolute;
    top: -280px;
    left: 50%;
    margin-left: 620px;
    -webkit-transition: -webkit-transform .5s ease;
    transition: -webkit-transform .5s ease;
    transition: transform .5s ease;
    transition: transform .5s ease,-webkit-transform .5s ease;
    z-index: 100;
}
.elevator_fix{
    position: fixed;
    top: 100px;
    -webkit-animation: eleShow .5s ease both;
    animation: eleShow .5s ease both;
  
}
.elevator_list{
  overflow: hidden;
 }
.elevator_item:hover{
  color:white;
 }
 .elevator_lk{
  position: relative;
    display: block;
    width: 38px;
    height: 38px;
    line-height: 19px;
    font-size: 14px;
    color: #333;
    padding: 10px;
    text-align: center;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
    background: #fff;
    z-index: 2;
    cursor: pointer;

 }
 .elevator_lk:after {
    position: absolute;
    display: inline-block;
    width: 40px;
    height: 1px;
    left: 50%;
    bottom: 0;
    margin-left: -20px;
    background: -webkit-gradient(linear,right top,left top,from(white),color-stop(#eeeeee),color-stop(#eeeeee),to(white));
    background: linear-gradient(270deg,white,#eeeeee,#eeeeee,white);
    z-index: 1;
    content: "";
}
.elevator_lk_bg{
  position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    z-index: 2;
    background: transparent;
    -webkit-transition: background .2s ease;
    transition: background .2s ease;
}
.elevator_lk_txt{
  position: relative;
  z-index:3;
}
.elevator_lk:hover .elevator_lk_bg {
    background: #c81623;
}
.elevator_promotional{
  width: 58px;
  height: 60px;
  padding:0;
}
.elevator_promotional img{
  width:100%;
}
.icon{
  display:block;
  width:16px;
  height:16px;
  margin:0 auto;
  font-size:16px;
}
.el_Totop{
    display: block;
    height: 50px;
    padding-top: 10px;
    color: #e1251b;
    background: #fff;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    cursor:pointer;
}
.elevator_fix .el_Totop {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translate(0);
    -ms-transform: translate(0);
    transform: translate(0);
}
.elevator_totop_txt{
    display: block;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
}
@keyframes eleShow{
  0%{
    top:35px;
  }
  100%{
    top:100px;
  }
}

`