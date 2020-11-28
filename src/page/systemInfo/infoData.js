const arrayContent = [];
const arrayRead = [];
const arrayNoRead = [];
let myBackgroundColor = "";
for (let i = 0; i < 6; i++) {
  let num = Math.random();
  if (num < 0.5) {
    myBackgroundColor = "#cecece";
  } else {
    myBackgroundColor = "#3fb8f8";
  }
  const allContent = {
    systemInfo: "系统消息",
    contentTitle: "尊敬的用户您好",
    mainContent: "您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！",
    signContent: "标记已读",
    backgroundColor: myBackgroundColor,
  };
  arrayContent.push(allContent);
  if (myBackgroundColor === "#cecece") {
    const readContent = {
      systemInfo: "系统消息",
      contentTitle: "尊敬的用户您好",
      mainContent: "您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！",
      signContent: "标记已读",
      backgroundColor: myBackgroundColor,
    };
    arrayRead.push(readContent);
  }
  if (myBackgroundColor === "#3fb8f8") {
    const noReadContent = {
      systemInfo: "系统消息",
      contentTitle: "尊敬的用户您好",
      mainContent: "您于2017/01/12费用耗尽，如果想继续使用本系统请及时缴费！",
      signContent: "标记已读",
      backgroundColor: myBackgroundColor,
    };
    arrayNoRead.push(noReadContent);
  }
}
// console.log(arrayContent);
export default {
  code: "0000",
  data: { arrayContent, arrayRead, arrayNoRead },
};
