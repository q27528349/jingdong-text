import styled from 'styled-components'

export const Search_warpper =styled.div`
  border-bottom: 1px solid #ddd;
  background: #fff;
.header{
position:relative;
height:140px;
width:1140px;
margin:0 auto;
overflow:hidden;
}
.img_right{
  position: absolute;
    right: 0;
    bottom: 10px;
    width: 190px;
    height: 120px;
}
`
export const Search_img = styled.div`
float:left;
img{
width:190px;
height:120px;
}
`
export const Search_input = styled.div`
position:absolute;
width:620px;
height:32px;
top:30px;
input{
z-index:1;
position:absolute;
left:240px;
width:488px;
height:32px;
background: transparent;
border:1px solid red;
outline:none;
padding: 2px 40px 1px 17px;
}
.sw_input{
position:absolute;
left:240px;
width:488px;
height:36px;
font-size:14px;
color:#ccc;
line-height:38px;
padding-left:20px;
}
.iconf{
  position: absolute;
  background-color: #e1251b;
  color:#fff;
  border:none;
  width:58px;
  height:36px;
  font-size:20px;
  right:-40px;
  cursor:pointer;
}
&.block_c_top{
  top:8px;
}
`
export const Settleup =styled.div`
position: absolute;
right: 200px;
top: 30px;
float:left;
width:132px;
height:36px;
border: 1px solid #e3e4e5;
color:#e1251b;
line-height:34px;
text-align: center;
.settleup_warrper{
position: relative;
overflow: hidden;
}
.text_right{
  font-size:12px;
}
.iconf{
  display:inline-block;
  font-size:16px;
  margin-right:8px;
}
.kazu{
    position: absolute;
    top: 1px;
    left: 29px;
    right: auto;
    display: inline-block;
    padding: 1px 3px;
    font-size: 12px;
    line-height: 12px;
    color: #fff;
    background-color: #e1251b;
    border-radius: 7px;
    min-width: 12px;
    text-align: center;
}
&.block_c_top{
  top:8px;
}
`
export const Search_text = styled.div`
  position: relative;
    width: 900px;
    height: 150px;
.text_re{
    overflow: hidden;
    position: absolute;
    left: 235px;
    top: 70px;
    line-height: 20px;
    a{
      font-size:10px;
      margin-left:10px;
      text-decoration:none;
      color:#999;
    }
    a:first-child{
      color:red;
    }
}
.text_blsj{
    overflow: hidden;
    position: absolute;
    left: 203px;
    bottom: 0;
    height: 40px;
    padding-top: 20px;
    a{
      font-size:15px;
      margin-left:10px;
      text-decoration:none;
      color:black;
    }
    a:first-child{
      font-weight: 700;
      color:red;
    }
    a:nth-child(2){
      font-weight: 700;
      color:red;
    }
}
`
export const Input_And_Settlup =styled.div`
&.block_top{
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height:52px;
    border-bottom: 2px solid #f10214;
    background-color: #fff;
    -webkit-box-shadow: 2px 2px 2px rgba(0,0,0,.2);
    box-shadow: 2px 2px 2px rgba(0,0,0,.2);
    animation: searchTop .5s ease-in-out;
}
.block_re{
    margin:0 auto;
    width: 1190px;
    height: 52px;
    position: relative;
    z-index: 1;
}
.logo_a{
    background-image: url(https://misc.360buyimg.com/mtd/pc/index_2019/1.0.0/assets/sprite/header/sprite.png);
    background-position: 0 -120px;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    width: 125px;
    height: 40px;
}
@keyframes searchTop {
  0%{
    top: -52px;
  }
  100%{
    top: 0px;

  }
} 
`
