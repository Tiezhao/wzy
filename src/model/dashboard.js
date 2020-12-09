import http from "../utils/http";
import { fetchTableData } from "../service/dashboard";

export default {
  namespace: "dashboard",
  state: {
    // 餐桌列表
    tableList: {
      all: { floorID: "all", floorName: "全部", tableList: [] },
    },
  },

  //对dispath
  reducers: {
    updateTableList(state, { payload }) {
      // console.log("updateTableList:", payload);

      return {
        ...state,
        tableList: payload,
      };
    },
  },
  // Generator
  effects: {
    *getTableData(_, { call, put }) {
      const result = yield call(fetchTableData);
      const floorObj = {
        all: { floorID: "all", floorName: "全部", tableList: [] },
      };
      if (result.success) {
        result.data.forEach((value) => {
          const { floorID, floorName } = value;

          if (!floorObj[floorID]) {
            floorObj[floorID] = { floorID, floorName, tableList: [value] };
          } else {
            floorObj[floorID].tableList.push(value);
          }
          floorObj.all.tableList.push(value);
        });
      }

      yield put({
        type: `updateTableList`,
        payload: floorObj,
      });
    },
  },
};
