import React, { Component } from 'react'
import { Inner_warpper, Inner_left, Inner_grid, Inner_Swiper, Inner_swiper1, Inner_FOCUS3 } from './style'
import Swiper from 'swiper/js/swiper.js'
import logo from '../statics/下载.png'


class Inner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isshow: false,
      data_out: 0,
      data_over: 0,
      state_div: "none",
      target: ""
    }
    this.mouseover = this.mouseover.bind(this)
    this.mouseout = this.mouseout.bind(this)
    this.mouseoverfocus = this.mouseoverfocus.bind(this)
    this.mouseoutfocus = this.mouseoutfocus.bind(this)
  }
  mouseover(e) {
    if (e.target.dataset.index === undefined) {
      this.refs.cate.className = "J_FOCUS2 none"
    } else {
      this.refs.cate.className = "J_FOCUS2 active"
    }
    let cate = this.refs.cate.childNodes;
    for (let i = 0; i < cate.length; i++) {
      cate[i].className = "none"
      if (e.target.dataset.index == cate[i].id) {
        cate[i].className = "active"
        this.setState({
          data_over: i,
          target: e.target
        })
      } else if (e.target.dataset.index === undefined) {
        cate[this.state.data_out].className = "active"
      }
    }
  }
  mouseout(e) {
    this.refs.cate.className = "J_FOCUS2 none"
    let cate = this.refs.cate.childNodes;
    for (let i = 0; i < cate.length; i++) {
      if (e.target.dataset.index == cate[i].id) {
        cate[i].className = "none"
        this.setState({
          data_out: i
        })
      }
    }
  }
  mouseoverfocus() {
    let cate = this.refs.cate.childNodes;
    this.refs.cate.className = "J_FOCUS2 active"
    cate[this.state.data_over].className = "active"
    this.state.target.className = "li_back"
  }
  mouseoutfocus() {
    let cate = this.refs.cate.childNodes;
    this.refs.cate.className = "J_FOCUS2 none"
    cate[this.state.data_over].className = "none"
    this.state.target.className = ""

  }

  componentDidMount() {
    var a = new Swiper('.banner1', {
      loop: true,
      autoplay: {
        delay:2000,
        disableOnInteraction:false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

    var b = new Swiper('.banner2', {
      loop: true,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }

  render() {
    return (
      <Inner_warpper>
        <Inner_grid>
          <Inner_left >
            <ul onMouseOver={this.mouseover}
              onMouseOut={this.mouseout}>
              <li data-index="1">家用电器</li>
              <li data-index="2">手机/运营商/数码</li>
              <li data-index="3">电脑/办公</li>
              <li data-index="4">家居/家具/家装/厨具</li>
              <li data-index="5">男装/女装/童装/内衣</li>
              <li>美妆/个护清洁/宠物</li>
              <li>女鞋/箱包/钟表/珠宝</li>
              <li>男鞋/运动/户外</li>
              <li>房产/汽车/汽车用品</li>
              <li>母婴/玩具乐器</li>
              <li>家居/家具/家装/厨具</li>
              <li>男装/女装/童装/内衣</li>
              <li>美妆/个护清洁/宠物</li>
              <li>女鞋/箱包/钟表/珠宝</li>
              <li>男鞋/运动/户外</li>
              <li>房产/汽车/汽车用品</li>
              <li>母婴/玩具乐器</li>
            </ul>
            <div className="J_FOCUS2" ref="cate" onMouseOver={this.mouseoverfocus}
              onMouseOut={this.mouseoutfocus}>
              <div id="1" >
                <div className="cate_part" >
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div id="2" >
                <div className="cate_part" >
                  <dl>
                    <dt>
                      电视2 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div id="3" >
                <div className="cate_part" >
                  <dl>
                    <dt>
                      电视3 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div id="4" >
                <div className="cate_part" >
                  <dl>
                    <dt>
                      电视4 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
              </div>
              <div id="5" >
                <div className="cate_part" >
                  <dl>
                    <dt>
                      电视5 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      电视 >
              </dt>
                    <dd>
                      <a>超薄电视</a>
                      <a>全面屏电视</a>
                      <a>智能电视</a>
                      <a>教育电视</a>
                      <a>OLED电视</a>
                      <a>智慧屏4K</a>
                      <a>超清电视</a>
                      <a>55英寸</a>
                      <a>65英寸</a>
                      <a>电视配件</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
                <div className="cate_part">
                  <dl>
                    <dt>
                      厨房小电 >
              </dt>
                    <dd>
                      <a>破壁机</a>
                      <a>电烤箱</a>
                      <a>电饭煲</a>
                      <a>电压力锅</a>
                      <a>电炖锅</a>
                      <a>豆浆机</a>
                      <a>料理机</a>
                      <a>咖啡机</a>
                      <a>电饼铛</a>
                      <a>榨汁机/原汁机电水壶/热水瓶</a>
                      <a>微波炉</a>
                      <a>电热饭</a>
                      <a>盒电火锅</a>
                      <a>养生壶</a>
                      <a>电磁炉</a>
                      <a>面包机</a>
                      <a>空气炸锅</a>
                      <a>面条机</a>
                      <a>电陶炉</a>
                      <a>煮蛋器</a>
                      <a>电烧烤炉</a>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </Inner_left>
          <Inner_Swiper>
            <div class="swiper-container banner1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://img10.360buyimg.com/babel/s590x470_jfs/t1/143175/30/214/84179/5ede1117E0ab06640/8a9c910e422af778.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/123871/7/3819/67451/5ed60c7cEb0d624e1/45ac4e33c0454f56.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/141275/10/200/68869/5edd9b56Ee59075a6/85da13a9b72fde65.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://imgcps.jd.com/ling/70012097009/55m96YWS6LaF5YC85aW95Lu3/5pu05oeC5L2g55qE6ZyA5rGC/p-5bd8253082acdd181d02fa42/71ef3c71/590x470.jpg" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/124539/22/4322/80276/5edc809eEdf086ea9/3f08827396a0bb29.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/91946/21/17215/91784/5e840dc2E2a2c8e2b/b20832c29f58f63f.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/125593/19/3226/65245/5ece7096E2ade2236/8bbac66d73eb1950.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/137131/10/635/89096/5ecfc6e3E4fe6f66a/bccc6855e2d4c70b.jpg.webp" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev button"></div>
              <div class="swiper-button-next button"></div>
            </div>
          </Inner_Swiper>
          <Inner_swiper1>

            <div class="swiper-container banner2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="https://img10.360buyimg.com/babel/s590x470_jfs/t1/143175/30/214/84179/5ede1117E0ab06640/8a9c910e422af778.jpg.webp" />
                  <img src="https://img14.360buyimg.com/pop/s590x470_jfs/t1/123871/7/3819/67451/5ed60c7cEb0d624e1/45ac4e33c0454f56.jpg.webp" />
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/141275/10/200/68869/5edd9b56Ee59075a6/85da13a9b72fde65.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://imgcps.jd.com/ling/70012097009/55m96YWS6LaF5YC85aW95Lu3/5pu05oeC5L2g55qE6ZyA5rGC/p-5bd8253082acdd181d02fa42/71ef3c71/590x470.jpg" />
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/124539/22/4322/80276/5edc809eEdf086ea9/3f08827396a0bb29.jpg.webp" />
                  <img src="https://img12.360buyimg.com/pop/s590x470_jfs/t1/91946/21/17215/91784/5e840dc2E2a2c8e2b/b20832c29f58f63f.jpg.webp" />
                </div>
                <div class="swiper-slide">
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/125593/19/3226/65245/5ece7096E2ade2236/8bbac66d73eb1950.jpg.webp" />
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/137131/10/635/89096/5ecfc6e3E4fe6f66a/bccc6855e2d4c70b.jpg.webp" />
                  <img src="https://img13.360buyimg.com/pop/s590x470_jfs/t1/137131/10/635/89096/5ecfc6e3E4fe6f66a/bccc6855e2d4c70b.jpg.webp" />
                </div>
              </div>
              <div class="swiper-button-prev button"></div>
              <div class="swiper-button-next button"></div>
            </div>
          </Inner_swiper1>
          <Inner_FOCUS3>
            <div className="useravatar">
              <div className="userinner">
                <div>
                  <div className="userlogo">
                    <img src={logo} />
                  </div>
                  <div className="username">
                    <a>Hi~欢迎逛京东！</a>
                    <p>登录 | 注册</p>
                  </div>
                </div>
                <div className="userprofit">
                  <a className="userprofit_lk">新人福利</a>
                  <a className="userprofit_lk userprofit_lk_plus">PLUS会员</a>
                </div>
              </div>
            </div>
            <div className="news">
              <div className="news_hd">
                <h5 className="news_tit">京东快报</h5>
                <a className="news_more">更多 ></a>
              </div>
              <ul className="news_list">
                <li className="news_item">
                  <a>
                    <span className="news_tag">热议</span>
                    探索别样风味，尽在黄天鹅可生食标准鸡蛋
                  </a>
                  </li>
                <li className="news_item">
                  <a>
                  <span className="news_tag">热议</span>
                  科技就要追新，7nm游戏本的强大实力，更快才更有乐趣！
                  </a>
                  </li>
                <li className="news_item">
                  <a>
                  <span className="news_tag">热议</span>
                  一站式补齐孕妈营养，妈妈健康宝宝才能更好地成长
                  </a>
                  </li>
                <li className="news_item">
                  <a>
                  <span className="news_tag">热议</span>
                  新房装修甲醛重？你需要这款空气净化器为宝宝保驾护航！
                  </a>
                  </li>
              </ul>
            </div>
            <div className="service">
              <div className="service_entry">
                <ul className="service_list">
                  <li className="service_item">
                    <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png"></img>
                    </a>
                    <span className="service_txt">话费</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/34261/15/10242/3120/5cd4f256E10257aba/8f3f63ae04ff19af.png"></img>
                    </a>
                    <span className="service_txt">机票</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/44601/19/915/1039/5cd4f1cfE2e46473c/b61f083872a7a1de.png"></img>
                    </a>
                    <span className="service_txt">酒店</span>
                  </li>
                  <li className="service_item">
                    <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png"></img>
                    </a>
                    <span className="service_txt">话费</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/34261/15/10242/3120/5cd4f256E10257aba/8f3f63ae04ff19af.png"></img>
                    </a>
                    <span className="service_txt">机票</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/44601/19/915/1039/5cd4f1cfE2e46473c/b61f083872a7a1de.png"></img>
                    </a>
                    <span className="service_txt">酒店</span>
                  </li>
                  <li className="service_item">
                    <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png"></img>
                    </a>
                    <span className="service_txt">话费</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/34261/15/10242/3120/5cd4f256E10257aba/8f3f63ae04ff19af.png"></img>
                    </a>
                    <span className="service_txt">机票</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/44601/19/915/1039/5cd4f1cfE2e46473c/b61f083872a7a1de.png"></img>
                    </a>
                    <span className="service_txt">酒店</span>
                  </li>
                  <li className="service_item">
                    <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/30057/19/14881/720/5cbf064aE187b8361/eed6f6cbf1de3aaa.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png"></img>
                    </a>
                    <span className="service_txt">话费</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/36478/38/5384/2901/5cbf065aEb0c60a12/afb4399323fe3b76.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/34261/15/10242/3120/5cd4f256E10257aba/8f3f63ae04ff19af.png"></img>
                    </a>
                    <span className="service_txt">机票</span>
                  </li>
                  <li className="service_item">
                  <a className="service_lk">
                      <img className="service_ico_img" src="https://m.360buyimg.com/babel/jfs/t1/31069/34/14642/979/5cbf0665Ec7dc8223/5fee386254dd2ebc.png"/>
                      <img class="service_ico_img_hover" src="//m.360buyimg.com/babel/jfs/t1/44601/19/915/1039/5cd4f1cfE2e46473c/b61f083872a7a1de.png"></img>
                    </a>
                    <span className="service_txt">酒店</span>
                  </li>
                </ul>
              </div>
            </div>
          </Inner_FOCUS3>
        </Inner_grid>
      </Inner_warpper>
    )
  }
}
export default Inner;