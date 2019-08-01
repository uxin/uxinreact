import React, { Fragment } from 'react';  //Fragment 虚拟节点
import { Route,Redirect } from 'react-router-dom';
import Router1 from '@/components/mian/router1';
import Router2 from '@/components/mian/router2';
import Router3 from '@/components/mian/router3';
import Router4 from '@/components/mian/router4';

export default class extends React.PureComponent{
    render(){
        return(
            <Fragment>
                <Route path="/router1" component={Router1} />
                <Route path="/router2" component={Router2} />
                <Route path="/router3" component={Router3} />
                <Route path="/router4" component={Router4} />
                <Redirect path="/" to="/router1"/>
            </Fragment>
        )
    }
}