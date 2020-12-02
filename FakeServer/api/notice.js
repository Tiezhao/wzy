const helper = require('./helper').default;
const dayjs = require('dayjs');

const A2Z = Array.from({ length: 26 }).reduce(
  (acc, v, i) => `${acc}${String.fromCharCode(65 + i)}`,
  ''
);
const range = (start = 0, end = 1) =>
  Number.parseInt(Math.random() * end + 1 + start);

const contentTemplate = [
  [
    `尊敬的用户您好！`,
    `您于2017/03/23费用耗尽，如想继续使用本系统，请及时缴费！`,
  ],
  [
    `系统维护通知`,
    `系统将于2018/06/22 23:30进行维护，届时服务将不可用，请做好相关处理。`,
  ],
  [
    `暂停服务通知`,
    `由于10月3日服务器所在区域停电维护，服务将离线不可用半日。`,
    `服务开启时间另行通知。`,
  ],
];

const size = 9;
const noticeList = [];
for (let i = 0; i < size; i++) {
  const item = {};
  let seed = helper.getRandomSeed();
  item.ID = `notice-id-${`${i}`.padStart(8, '0')}`;
  item.content = seed.a
    ? contentTemplate[0]
    : seed.b
    ? contentTemplate[1]
    : contentTemplate[2];
  item.createTime = dayjs()
    .add(range(1, 10), 'd')
    .valueOf();
  seed = helper.getRandomSeed();
  item.isRead = seed.half;

  noticeList.push(item);
}

exports.default = (app) => {
  app.get('/api/v1/notice/getAllNotice', (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

    data.data = noticeList;

    setTimeout(() => resp.end(JSON.stringify(data)), 500);
  });
  app.post('/api/v1/notice/markRead', (req, resp) => {
    helper.charSet(resp);
    const data = helper.getResponseTeamplate();

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
