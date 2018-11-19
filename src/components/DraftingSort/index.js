import React from 'react';
import Sortable from '../../../static/plugin/Sortable.min.js'; // Sortable.js --- js拖拽排序插件
/**
 * 拖拽排序组件
 * props {
 *    sorting {Boolean} 控制被包裹子元素是否进去可拖拽排序状态，类似开关
 *    className {String} 拖拽组件容器类名，可据此定义样式
 * }
 * 注： 此组件只提供拖拽容器，任何拖拽之外的行为和样式，需要引用者自行定义
 */
class DraftingSort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 1
    };
  }
  UNSAFE_componentWillReceiveProps (nextProps) {
    if (nextProps.sorting !== this.props.sorting) {
      let { sorting } = nextProps;
      if (sorting) {
        let sortDom = document.getElementById('sortId');
        Sortable.create(sortDom);
      } else {
        this.setState({
          sortKey: this.state.sortKey + 1
        })
      }
    }
  }
  render () {
    let { sortKey } = this.state;
    let { className } = this.props;
    return (
      <div id="sortId" className={className ? className: ''} key={sortKey}>
        {this.props.children}
      </div>  
    )
  }
}

export default DraftingSort;