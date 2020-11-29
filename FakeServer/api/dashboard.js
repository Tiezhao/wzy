const helper = require('./helper').default;

const createTable = (floor, i) => {
  const table = {};

  table.floorID = `floor-${floor}`;
  table.floorName = '1楼';
  table.tableID = Date.now() + Math.random() * 10000;
  table.tableName = `${floor}F-餐桌${i + 1}`;
  let seed = helper.getRandomSeed();
  table.tableStatus = seed.a ? 0 : seed.b ? 1 : 2;
  seed = helper.getRandomSeed();
  table.requestList = [seed.a ? 0 : seed.b ? 1 : 2];
  table.requestList.fill({});
  table.requestList.forEach((v) => {
    seed = helper.getRandomSeed();
    v.reqID = `t${i + 1}-req-${i + 1}`;
    v.reqContent = seed.a ? '加水' : seed.b ? '点菜' : '买单';
    v.reqTime = Date.now() + Math.random() * 12345;
  });

  stoveStatus = {};
  seed = helper.getRandomSeed();
  stoveStatus.power = seed.a ? 0 : seed.b ? 1 : 2;
  seed = helper.getRandomSeed();
  stoveStatus.fan = seed.a ? 0 : seed.b ? 1 : 2;
  seed = helper.getRandomSeed();
  stoveStatus.water = seed.a ? 0 : seed.b ? 1 : 2;

  return table;
};

const createTableList = (floor, num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(createTable(floor, i));
  }

  return arr;
};

exports.default = (app) => {
  app.get('/api/v1/dashboard/getTables', (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    const list = [
      ...createTableList(1, 8),
      ...createTableList(2, 7),
      ...createTableList(3, 10),
    ];

    console.info('list:', list);
    data.data = list;

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
  app.post('/api/v1/dashboard/handleRequest', (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();
    const { tableID, floorID } = req.body;
    if (!tableID || !floorID) {
      helper.illeagalArgument(data);
      setTimeout(() => resp.end(JSON.stringify(data)), 500);
      return;
    }

    const seed = helper.getRandomSeed();
    if (seed.half) {
      data.message = '系统繁忙···';
      data.success = false;
    } else {
      data.success = true;
    }

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
};
