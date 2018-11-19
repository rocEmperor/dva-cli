import React from 'react';
import DraftingSort from './index';
import './demo.less';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {name: '小程序', id: 0},
        {name: '智能门禁', id: 1},
        {name: '报事保修', id: 2},
        {name: '我的', id: 3},
        {name: '业主投票', id: 4},
        {name: '投诉建议', id: 5},
        {name: '红包', id: 6},
        {name: '入驻社区', id: 7},
        {name: '联系我们', id: 8},
        {name: '社区指南', id: 9},
        {name: '我要卖房', id: 10},
        {name: '我要出租', id: 11},
        {name: '业主管理', id: 12},
        {name: '访客管理', id: 13},
        {name: '共享车位', id: 13}
      ],
      sorting: false,
      sortKey: 1
    };
  }
  onSort () {
    let { sorting } = this.state;
    this.setState({
      sorting: !sorting
    })
  }
  onTab () {
    let { sorting } = this.state;
    // 当前不在排序状态下才能执行click事件，否则不执行
    if (!sorting) {
      // console.log(111111111111);
    }
  }
  render () {
    let { sorting, arr } = this.state;
    return (
      <div className="sort">
        <div className="server-til">
          <div className="type">
            物业服务
          </div>
          <div className="sort-btn" onClick={() => this.onSort()}>
            {sorting 
              ? <span>完成排序</span> 
              : <span>排序</span> }
          </div>
        </div>
        <DraftingSort sorting={sorting} className="sort-box">
          {arr.map((item, index) => {
            return (
              <div key={index} onClick={this.onTab} className={sorting ? "sort-item" : "sort-item sort-item-normal"} data-id={item.id}>
                <div className="icon-box"></div>
                <div className="name">
                  {item.name}
                </div>
              </div>
            )
          })} 
        </DraftingSort>
      </div>
    )
  }
}

export default Parent;