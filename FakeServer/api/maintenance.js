const helper = require("./helper").default;
const dayjs = require("dayjs");

const callingList = [
  { ID: "8888", content: "加水" },
  { ID: "3333", content: "加菜" },
];

exports.default = (app) => {
  app.get("/api/v1/maintenance/getCallingList", (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    data.data = callingList;

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
  app.post("/api/v1/maintenance/update", (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();
    const { ID, content } = req.body;
    if (!ID || !content) {
      helper.illeagalArgument(data);
      setTimeout(() => resp.end(JSON.stringify(data)), 500);
      return;
    }

    const val = callingList.find((v) => v.ID === ID);
    val.content = content;

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
  app.post("/api/v1/maintenance/delete", (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    const { ID } = req.body;
    if (!ID) {
      helper.illeagalArgument(data);
      setTimeout(() => resp.end(JSON.stringify(data)), 500);
      return;
    }

    callingList.splice(callingList.findIndex((v) => v.ID === ID), 1);

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
  app.post("/api/v1/maintenance/add", (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    const { content } = req.body;
    if (!content) {
      helper.illeagalArgument(data);
      setTimeout(() => resp.end(JSON.stringify(data)), 500);
      return;
    }

    callingList.push({ ID: `${Date.now()}`, content });

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
};
