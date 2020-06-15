import React,{Component} from 'react'
import {Pubu_warpper} from './style'
import axios from 'axios'
let tt=0;
let lastget=0;
let str =[];


class Pubu extends Component {
  constructor(props){
    super(props)
    this.state={
      ultop:952,
      nb:0,
      str:[],
    }
    this.ajaxPull=this.ajaxPull.bind(this)
  }
  componentDidMount(){
    document.addEventListener('scroll',this.ajaxPull)
}
componentWillUnmount(){
    document.removeEventListener('scroll',this.ajaxPull);
}
ajaxPull(){
  const height = window.innerHeight;
  console.log(this.props.clheight)
  if(this.props.scroll +height>this.props.clheight-952){
    this.ajaxData();
      tt++
  }
};
ajaxData (){
    let list =this.props.data; 
      for(let i=tt*10;i<(tt+1)*10;i++){
        if(list[i]!=undefined){
          str.push(list[i])
        // str.push(
        //   <li className="more2_item" key={list[i].text+i}>
        //   <div className="img_text">
        //   <img className="img_pubu" src={list[i].src}/>
        //     <p className="txt_name">{list[i].text}</p>          
        //     </div>
        // </li>)
        }
      }
    
      this.setState({
        str,
      })
    
  }

  render(){
    let list = this.state.str;
    console.log(tt)

       return(
      <Pubu_warpper ref="ul" >
        <div className="floor">
          <h3 className="floor_hit">
            为你推荐
          </h3>
        </div>
      <div className="grid_c1">
        <ul className="more2_list" >
         {
          list.map((item,index)=>{
            return(
             <li className="more2_item" key={item.text}>
             <div className="img_text">
               <img className="img_pubu" src={item.src}/>
               <p className="txt_name">{item.text}</p>
             </div>
           </li>
            )
          })
         }
         {
           
         }
        </ul>
      </div>
      </Pubu_warpper>
    )
  }
}

export default Pubu;