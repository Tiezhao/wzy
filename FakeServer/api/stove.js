const helper = require('./helper').default;
const dayjs = require('dayjs');

const A2Z = Array.from({ length: 26 }).reduce(
  (acc, v, i) => `${acc}${String.fromCharCode(65 + i)}`,
  ''
);
const range = (start = 0, end = 1) =>
  Number.parseInt(Math.random() * end + 1 + start);

const size = 25;
const stoveMatchList = [];
for (let i = 0; i < size; i++) {
  const item = {};
  item.sn = i + 1;
  item.stoveNo = 2000 + i;
  item.blueteethPin = `${A2Z[range(0, 25)]}${A2Z[range(0, 25)]}:${
    A2Z[range(0, 25)]
  }${A2Z[range(0, 26)]}:${range(10, 19)}`;
  item.terminalCode = `P${`${i}`.padStart(4, '0')}`;
  item.terminalName = `${i <= 8 ? 1 : i <= 15 ? 2 : 3}F-餐桌${
    i <= 8 ? i + 1 : i <= 15 ? i + 1 - 8 : i + 1 - 15
  }`;
  item.issueTime = dayjs()
    .startOf('d')
    .valueOf();
  item.expireTime = dayjs()
    .add(range(1, 360), 'd')
    .endOf('d')
    .valueOf();
  item.validDays = dayjs(item.expireTime).diff(item.issueTime, 'd');
  const seed = helper.getRandomSeed();
  item.status = seed.a ? 0 : seed.b ? 1 : 2;
  item.orderNo = `${i}`.padStart(8, i + 1);

  stoveMatchList.push(item);
}

exports.default = (app) => {
  app.post('/api/v1/stove/getStoveMatchList', (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    const { page = 1, pageSize = 10, terminalName = '' } = req.body;

    if (+page < 1 || +pageSize < 1) {
      helper.illeagalArgument(data);
      resp.end(JSON.stringify(data));
      return;
    }

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const filteredData = stoveMatchList.filter((v) =>
      v.terminalName.includes(terminalName)
    );
    data.data = {
      list: filteredData.slice(start, end),
      total: filteredData.length,
    };

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
};
