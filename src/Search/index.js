import React, { Component } from 'react'
import { Search_img, Search_input, Search_warpper, Settleup, Search_text,Input_And_Settlup} from './style'
import logopic from '../statics/jingdong.gif'


class Search extends Component {
 
  render() {
    return (
      <Search_warpper>
        <div className="header">
          <Search_img>

            <img src={logopic} />
          </Search_img>
          <Input_And_Settlup className={this.props.scroll>550?"block_top":""}>
            <div className={this.props.scroll>550?"block_re":""}>
              <a className="logo_a" Style={this.props.scroll>550?"display:block":"display:none"}></a>
          <Search_input className={this.props.scroll>550?"block_c_top":""}>
            <input></input>
            <div className="sw_input">无线路由
        <button className="iconfont iconf">&#xe66d;</button>
            </div>
          </Search_input>
          <Settleup className={this.props.scroll>550?"block_c_top":""} >
            <div className="settleup_warrper">
              <div className="iconfont iconf">&#xe636;</div>
              <i className="text_right">我的购物车</i>
              <i className="kazu">0</i>
            </div>
          </Settleup>
          </div>
          </Input_And_Settlup>
          <Search_text>
            <div className="text_re">
              <a href="">珠宝五折</a>
              <a href="">抢电视618</a>
              <a href="">食品饮料</a>
              <a href="">运动618</a>
              <a href="">品质居家</a>
              <a href="">电脑数码</a>
              <a href="">羔羊奶粉</a>
              <a href="">每100-50</a>
              <a href="">美妆护肤</a>
            </div>
            <div className="text_blsj">
              <a href="">秒杀</a>
              <a href="">优惠券</a>
              <a href="">PLUS会员</a>
              <a href="">品牌闪购</a>
              <a href="">拍卖</a>
              <a href="">京东家电</a>
              <a href="">京东超市</a>
              <a href="">京东生鲜</a>
              <a href="">京东金融</a>
              <a href="">京东国际</a>
            </div>
          </Search_text>
          <img className="img_right" src="https://img14.360buyimg.com/babel/jfs/t1/126773/35/4177/42477/5eda4dd2E22bcf7ac/4de3fdc9bb8aa2c1.png.webp" />
        </div>
      </Search_warpper>
    )
  }
}

export default Search;