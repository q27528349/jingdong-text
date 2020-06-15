import styled from 'styled-components'

export const HeaderWarpper = styled.div`
height:30px;
width:100%;
background-color: #e3e4e5;
color:#999;
`
export const Headercenter = styled.div`
margin:0 auto;
width:1190px;
font-size:10px;
height:30px;
line-height:30px;
`
export const Headercity =styled.div`
float:left;
cursor:pointer;
.icon{
  color:red;
  font-size:10px;
}
`

export const Headerright =styled.div`
float:right;
cursor:pointer;
display:flex;
flex-wrap:nowrap;
flex-direction:row;

`
export const Headerreg = styled.div`
color:red;
margin:0 15px;
`
export const Header_a= styled.div`
position:relative;
box-sizing:border-box;
width:73px;
.i_hover{
  position:relative;
  z-index:5;
  background:white;
  border-right:1px solid #333;
  border-left:1px solid #333;
  border-top:1px solid #333;
}
.red{
  color:red;
}
a{
  padding-left:10px;
  border-left:1px solid #ccc;
}
a:hover{
  color:red
}
.iconfont{
  font-size:5px;
}
.none{
  display:none;
}
.active{
  display:block;
}
.JD_WD{
  z-index:2;
  border:1px solid #333;
  background:white;
  position:absolute;
  top:31px;
  left:0px;
  height:72px;
  width:265px;
}
`
export const Header_login= styled.div`
:hover{
  color:red
}
`
