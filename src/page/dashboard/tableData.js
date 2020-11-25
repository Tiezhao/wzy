const arr = [];
let ID = 1;
//table为蓝色有内容
const tableOnHaveContent = {
  floorName: "一楼",
  tableName: "餐桌1-001",
  //tableStatus决定table的状态颜色
  tableStatus: 1,
  tableId: "tableID",
  callingContent: [
    //时间记得用date来获取最新时间
    {
      id: "water",
      name: "加水",
      time: "19:00",
    },
    {
      id: "oder",
      name: "点菜",
      time: "19:01",
    },
  ],
  //0:off 1:on 2:breakdown 决定三个图标的状态颜色
  status: {
    stove: 1,
    fan: 1,
    cooler: 1,
  },
};

const tableOnWithoutContent = {
  floorName: "一楼",
  tableName: "餐桌1-001",
  //tableStatus决定table的状态颜色
  tableStatus: 1,
  tableId: "tableID",
  callingContent: [],
  //0:off 1:on 2:breakdown 决定三个图标的状态颜色
  status: {
    stove: 1,
    fan: 1,
    cooler: 1,
  },
};
const tableOff = {
  floorName: "一楼",
  tableName: "餐桌1-001",
  //tableStatus决定table的状态颜色
  tableStatus: 0,
  tableId: "tableID",
  callingContent: [],
  //0:off 1:on 2:breakdown 决定三个图标的状态颜色
  status: {
    stove: 0,
    fan: 0,
    cooler: 0,
  },
};
const tableBreakdown = {
  floorName: "一楼",
  tableName: "餐桌1-001",
  //tableStatus决定table的状态颜色
  tableStatus: 2,
  tableId: "tableID",
  callingContent: [
    //时间记得用date来获取最新时间
    {
      id: "water",
      name: "加水",
      time: "19:00",
    },
    {
      id: "oder",
      name: "点菜",
      time: "19:01",
    },
  ],
  //0:off 1:on 2:breakdown 决定三个图标的状态颜色
  status: {
    stove: 2,
    fan: 2,
    cooler: 2,
  },
};
// const tableOff=[off,on,breakdown]
//0.0-0.3为off 0.4-0.6为on 0.7-1.0为breakdown
for (let i = 0; i < 24; i++) {
  let num = Math.random();
  if (num >= 0.0 && num <= 0.3) {
    arr.push(tableOff);
  } else if (num > 0.3 && num <= 0.45) {
    arr.push(tableOnHaveContent);
  } else if (num > 0.45 && num <= 0.6) {
    arr.push(tableOnWithoutContent);
  } else {
    arr.push(tableBreakdown);
  }
  // ID++;
}

export default {
  code: "000000",
  data: {
    list: arr,
  },
};
