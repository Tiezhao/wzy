export default {
  namespace: 'dashboard',
  state: {
    // 餐桌列表
    tableList: {
      all: { floorID: 'all', floorName: '全部', tableList: [] },
    },
  },

  reducers: {
    updateTableList(state, { payload }) {
      console.log('updateTableList:', payload);

      return {
        ...state,
        tableList: payload,
      };
    },
  },
};
