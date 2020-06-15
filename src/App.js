import React,{Component,Fragment} from 'react';
import Header from './header'
import Search from './Search'
import Inner from './Inner'
import Swiper_gd from './Swiper-gd'
import Totop from './Totop'
import Pubu from './Pubu'
import {GlobalStyle} from './style'
import {IconfontStyle} from './common/iconfont/iconfont'
import 'swiper/css/swiper.min.css'
import axios from 'axios'


class App extends Component{
  constructor(props){
    super(props)
    this.state={
      scroll:0,
      clheight:0,
      data:[]
    }
    this.scrolltops=this.scrolltops.bind(this);
  }
  render(){
    return(
      <Fragment>
      <GlobalStyle/>
      <IconfontStyle/>
      <Header/>
      <Search scroll={this.state.scroll}/>
      <Inner/>
      <Swiper_gd/>
      <Totop scroll={this.state.scroll}/>
      <Pubu scroll={this.state.scroll} clheight={this.state.clheight} data={this.state.data}/>
      </Fragment>
    )
  }
  componentDidMount(){
    window.addEventListener("scroll",this.scrolltops)
    axios.get('/api/pubu.json').then((res)=>{
      this.setState({
        data:res.data.data
      })
    }) 
  }
  scrolltops(){
    this.setState({
      scroll:document.documentElement.scrollTop,
      clheight:document.documentElement.scrollHeight
     })
   
  }
}

export default App;
