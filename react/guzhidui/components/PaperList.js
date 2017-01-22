import React, { Component }from 'react'
import Paper from './Paper'

class PaperList extends Component {
  componentDidMount() {
    let that = this
    window.addEventListener('scroll', function scrollHandler() {
      function getOffset(Node, offsetTop) {
        if (!offsetTop) {
            offsetTop = 0;
        }
        if (Node == document.body) {//当该节点为body节点时，结束递归
            return offsetTop;
        }
        offsetTop += Node.offsetTop;
        return getOffset(Node.offsetParent, offsetTop);//向上累加offset里的值
      }
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let top = getOffset(document.getElementById('anchor'))
      let distance = top - height - 150
      if (that.props.canAsking && scrollTop > distance) {
        that.props.onCheckMore()
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', scrollHandler)
  }

  render() {
    let listShows = this.props.paperList.map((paper, index) => {
      return (
        <Paper key={paper._id} paper={paper} onWritePaper={this.props.onWritePaper}/>
      )
    });

    return (
      <ul className="paper_list"> 
        {listShows} 
      </ul>
    )
  }
}

export default PaperList