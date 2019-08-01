import React, { Fragment } from 'react';  //Fragment 虚拟节点
import axios from "axios"
import { Button } from 'antd-mobile';
export default class extends React.Component {
    render() {
        return (
            <Fragment>
                <div>router1组件</div>
                <Button onClick={this.testGet.bind(this)}>发送ajax按钮</Button>
            </Fragment>
        )
    }

    testGet(){
        // https://cnodejs.org/api/v1/topics 代理该接口示范
        // axios({
        //     method:"get",
        //     url:"/apis/api/v1/topics"
        // }).then((res)=>{
        //     console.log(res);
        // })

        // mock数据发送
        axios({
            method: "get",
            url: "/test"
        }).then((res) => {
            console.log(res);
        })
    }
}