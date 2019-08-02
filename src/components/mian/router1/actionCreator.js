// 定义接口
import axios from "axios"

// const GET_LIST_DATE = "TEST_SYNC";
export const GET_LIST_DATE = "info/get_list_data";

export const loadListData = (val) => {
    return {
        type: GET_LIST_DATE,
        val
    }
}


export const loadListDataAsync = (dispatch) => {
    return () => {
        axios({
            method: "get",
            url: "/apis/api/v1/topics"
        }).then((res) => {
            // dispatch({type,val});
            dispatch(loadListData(res.data.data));
        })
    }
}