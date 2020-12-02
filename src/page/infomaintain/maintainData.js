import { Table, Button, Card } from "antd";
const callColumns = [
  {
    title: "呼叫名称",
    dataIndex: "callcontent",
    key: "callcontent",
  },
  {
    title: "操作",
    key: "operate",
    dataIndex: "operate",
    render: (operate) => {
      if (operate != "") {
        return (
          <>
            {operate.map((item) => {
              let color = "";
              let backgroundColor = "";
              if (item === "编辑") {
                color = "#ffffff";
                backgroundColor = "#3bb8f8";
              } else {
                color = "#3bb8f8";
                backgroundColor = "#ffffff";
              }
              return (
                <Button
                  style={{
                    backgroundColor: backgroundColor,
                    color: color,
                    width: 90,
                    height: 40,
                    fontSize: 20,
                    borderRadius: 4,
                    border: "1px solid #3bb8f8",
                    marginRight: 16,
                  }}
                >
                  {item}
                </Button>
              );
            })}
          </>
        );
      } else {
        return null;
      }
    },
  },
];
const areaColumns = [
  {
    title: "区域名称",
    dataIndex: "callcontent",
    key: "callcontent",
  },
  {
    title: "操作",
    key: "operate",
    dataIndex: "operate",
    render: (operate) => {
      if (operate != "") {
        return (
          <>
            {operate.map((item) => {
              if (item != "") {
                let color = "";
                let backgroundColor = "";
                if (item === "编辑") {
                  color = "#ffffff";
                  backgroundColor = "#3bb8f8";
                } else {
                  color = "#3bb8f8";
                  backgroundColor = "#ffffff";
                }
                return (
                  <Button
                    style={{
                      backgroundColor: backgroundColor,
                      color: color,
                      width: 90,
                      height: 40,
                      fontSize: 20,
                      borderRadius: 4,
                      border: "1px solid #3bb8f8",
                      marginRight: 16,
                    }}
                  >
                    {item}
                  </Button>
                );
              } else {
              }
            })}
          </>
        );
      } else {
        return null;
      }
    },
  },
];
const callData = [
  {
    key: "1",
    callcontent: "加水",
    operate: ["编辑", "删除"],
  },
  {
    key: "2",
    callcontent: "点菜",
    operate: ["编辑", "删除"],
  },
  {
    key: "3",
    callcontent: "",
    operate: "",
  },
  {
    key: "4",
    callcontent: "",
    operate: "",
  },
];
const areaData = [
  {
    key: "1",
    callcontent: "一楼",
    operate: ["编辑", "删除"],
  },
  {
    key: "2",
    callcontent: "二楼",
    operate: ["编辑", "删除"],
  },
  {
    key: "3",
    callcontent: "",
    operate: "",
  },
  {
    key: "4",
    callcontent: "",
    operate: "",
  },
];
export default {
  data: { callColumns, areaColumns, callData, areaData },
};
