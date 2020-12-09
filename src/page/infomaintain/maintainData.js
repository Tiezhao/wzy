import { Table, Button, Modal } from "antd";
import MaintainButton from "./component/maintainButton";
import DeleteButton from "./component/deleteButton";

let visible = false;
const showModal = () => {
  visible = true;
};
const handleOk = function() {
  visible = false;
};
const handleCancel = function() {
  visible = false;
};

const callColumns = [
  {
    title: "呼叫名称",
    dataIndex: "callcontent",
    key: "callcontent",
  },
  {
    title: "操作",
    key: "operate",
    render: (data, record, index) => {
      // console.log(data, record, index);
      return (
        <>
          <Button type="primary">编辑</Button>
          <Button>删除</Button>
        </>
      );
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
  },
  {
    key: "2",
    callcontent: "点菜",
  },
  {
    key: "3",
    callcontent: "",
  },
  {
    key: "4",
    callcontent: "",
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
