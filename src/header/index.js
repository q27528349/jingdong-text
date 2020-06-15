import React, { Component } from 'react'
import { HeaderWarpper, Headercenter, Headercity, Headerright,Header_a,Headerreg,
  Header_login} from './style'

class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      isshow:false
    }
    this.mouseenter=this.mouseenter.bind(this)
    this.mouseleave=this.mouseleave.bind(this)
  }

  render() {
    return (
      <HeaderWarpper>
        <Headercenter>
          <Headercity ><i className="iconfont icon">&#xe632;</i>广东</Headercity>
          <Headerright>
            <Header_login>你好，请登录</Header_login> 
            <Headerreg>免费注册</Headerreg>
            <Header_a><a>我的订单</a></Header_a>
            <Header_a onMouseEnter={this.mouseenter}
            onMouseLeave={this.mouseleave}><div 
             className={this.state.isshow==true?"i_hover":""
             }>
               <a>我的京东</a><i className="iconfont">&#xe658;</i>
               </div>
               <div  
               className={this.state.isshow==true?"JD_WD active":"JD_WD none"}>
              待处理订单
              返修退换货
              降价商品
              消息
              我的问答
              我的关注
              </div>
               </Header_a>
            <Header_a><a>京东会员</a></Header_a>
            <Header_a><a className="red">企业采购</a></Header_a>
            <Header_a><a>客户服务</a><i className="iconfont">&#xe658;</i></Header_a>
            <Header_a><a>网站导航</a><i className="iconfont">&#xe658;</i></Header_a>
            <Header_a><a>手机京东</a></Header_a>
          </Headerright>
        </Headercenter>
      </HeaderWarpper>
    )
  }
  mouseenter(){
    this.setState({
      isshow:true
    })
  }
  mouseleave(){
    this.setState({
      isshow:false
    })
  }
}

export default Header;