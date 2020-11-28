const stoveArr = [];
let stoveNumber = "";
let terminalIndexNumber = "";
let terminalIndexName = "";
let orderNumber = "";
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    stoveNumber = "2002";
    terminalIndexNumber = "P002";
    terminalIndexName = "餐桌二";
    orderNumber = "002";
  } else {
    stoveNumber = "2001";
    terminalIndexNumber = "P001";
    terminalIndexName = "餐桌一";
    orderNumber = "001";
  }
  const stove01 = {
    index: i,
    stoveNum: stoveNumber,
    bluePing: "AB:CE:23",
    terminalIndex: terminalIndexNumber,
    terminalName: terminalIndexName,
    StartTime: "2017/01/01",
    outdateTime: "2018/12/12",
    surplusTime: "300",
    state: "正常",
    orderNum: orderNumber,
  };
  stoveArr.push(stove01);
}
export default {
  code: "0000",
  data: {
    list: stoveArr,
  },
};
