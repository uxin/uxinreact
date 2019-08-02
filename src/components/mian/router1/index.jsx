import React, { Fragment } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import {loadListDataAsync} from "@/components/mian/router1/actionCreator";
import { Button } from 'antd-mobile';

class Router1 extends React.Component {
    render() {
        return (
            <Fragment>
                <div>router1组件</div>
                <Button onClick={this.props.handleAdd.bind(this)}>发送ajax按钮</Button>
            </Fragment>
        )
    }
    // componentDidMount(){
    //     this.props.handleAdd();
    // }
}


//定义属性
const mapStateToProps = (state) =>{
    console.log(state);
    return {
        titleList: state.getIn(["indexReducer", "titleList"])
    }
}
//定义方法
const mapDispatchToProps = (dispatch) => ({
    handleAdd() {
        dispatch(loadListDataAsync(dispatch));
    },
    // handleSync() {
    //     //异步调用dispatch
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Router1);