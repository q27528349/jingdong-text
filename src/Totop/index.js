import React, { Component } from 'react'
import { Totop_div } from './style'

class Totop extends Component {


  Totopclick(){
    let timer  = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
    let vtop= document.body.scrollTop || document.documentElement.scrollTop;
    if(vtop>0){
      document.body.scrollTop = document.documentElement.scrollTop = vtop - 100;
      timer = requestAnimationFrame(fn);
      }else{
        cancelAnimationFrame(timer);
      }
    })
  }
  render() {
    return (
      <Totop_div>
        <div className={this.props.scroll>600?"elevator elevator_fix":"elevator"}>
          <ul className="elevator_list">
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
                <span className="elevator_lk_txt">京东秒杀</span>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk elevator_promotional">
              <span className="elevator_lk_bg"></span>
              <img src="//m.360buyimg.com/babel/jfs/t1/126961/15/1021/32990/5eb8c60eE680414f2/3d5584370f43d0a4.gif" alt=""/>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
              <span className="elevator_lk_txt">特色优选</span>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
              <span className="elevator_lk_txt">频道广场</span>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
              <span className="elevator_lk_txt">为你推荐</span>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
              <span className="iconfont icon">&#xe66d;</span>
              <span className="elevator_lk_txt">客服</span>
              </a>
            </li>
            <li className="elevator_item">
              <a className="elevator_lk ">
              <span className="elevator_lk_bg"></span>
              <span className="iconfont icon">&#xe66d;</span>
              <span className="elevator_lk_txt">反馈</span>
              </a>
            </li>
          </ul>
          <a className="el_Totop" onClick={this.Totopclick}>
          <span>^</span>
          <span className="elevator_totop_txt">顶部</span>
          </a>
        </div>
      </Totop_div>
    )
  }
}

export default Totop;