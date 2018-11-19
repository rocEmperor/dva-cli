'use strict';
import React from 'react';
import { Form, Tree,} from 'antd';
const TreeNode = Tree.TreeNode;

class TreeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
 
  }

  changeItem(id){
    this.props.change(id);
  }

  renderTreeNodes = (data) => {
    return data.map((item,index) => {
      if (item.children) {
        return (
          <TreeNode title={item.name} key={item.id} onClick={this.changeItem.bind(this,item.id)} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }else {
        return (
          <TreeNode title={item.name} key={item.id} dataRef={item} />
        );
      }
      /* eslint-disable */
      return <TreeNode {...item} dataRef={item} key={index}/>
      /* eslint-enable */
    });
  }


  render() {
    const menus = this.props.menus;

    return (
      <div style={{border:'1px solid #ccc',padding:'10px',marginRight:'10px',overflowX:'auto'}}>
        <p>项目资料</p>
        <Tree defaultExpandAll>
          {this.renderTreeNodes(menus)}
        </Tree>
      </div>
    );
  }
}
TreeMenu = Form.create()(TreeMenu);
export default TreeMenu;
