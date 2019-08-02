// 数据仓库
import { fromJS } from "immutable";
import { GET_LIST_DATE } from "@/components/mian/router1/actionCreator"

const defaultStore = fromJS({
    num: 0,
    titleList:[],
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case GET_LIST_DATE:
        return state.update("titleList", (x) => x = action.val)
    }
    return state;
}