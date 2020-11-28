// const Box = (props) => (
//   <div
//     style={{
//       width: "100px",
//       height: "100px",
//       float: "left",
//       background: props.color,
//       ...props.style,
//     }}
//   ></div>
// );

// export default function Dashboard() {
//   return (
//     <div>
//       <Box color="red"></Box>
//       <Box color="green" style={{ top: 25, left: 25, zIndex: -1 }}></Box>
//       <Box color="blue" style={{ top: 50, left: 50, zIndex: 4 }}></Box>
//     </div>
//   );
// }
// const stoveArr = [];

// const stove01 = {
//   stoveNum: "2001",
//   bluePing: "AB:CE:23",
//   terminalIndex: "P001",
//   terminalName: "餐桌一",
//   StartTime: "2017/01/01",
//   outdateTime: "2018/12/12",
//   surplusTime: "300",
//   state: "正常",
//   orderNum: "001",
// };
// const stove02 = {
//   stoveNum: "2002",
//   bluePing: "AB:CE:24",
//   terminalIndex: "P002",
//   terminalName: "餐桌二",
//   StartTime: "2017/01/01",
//   outdateTime: "2018/12/12",
//   surplusTime: "300",
//   state: "正常",
//   orderNum: "002",
// };

// for (let i = 1; i <= 50; i++) {
//   if (i / 2 === 0) {
//     stove02.unshift({ key: i, index: i });
//     stoveArr.push(stove02);
//   } else {
//     stove01.unshift({ key: i, index: i });
//     stoveArr.push(stove01);
//   }
// }
// export default {
//   code: "0000",
//   data: {
//     list: stoveArr,
//   },
// };
