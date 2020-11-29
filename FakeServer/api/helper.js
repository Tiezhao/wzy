const errorCode = {
  normal: { code: '000000', message: '' },
  methordNotSupport: { code: '000001', message: '不支持的请求方式' },
  illegalArgument: { code: '000002', message: '非法参数' },
  sysDown: { code: '000003', message: '系统繁忙，请稍后再试' },
  wrongAuthCode: { code: '000004', message: '授权码错误' },
  wrongSmsCode: { code: '000005', message: '验证码错误！' },
};

exports.default = {
  errorCode,
  notSupport: (v) => {
    Object.assign(v, errorCode.methordNotSupport);
    v.success = false;
    return v;
  },

  getRandomSeed: () => {
    const percentage = Math.random() * 101;

    return {
      a: percentage < 33.33,
      b: percentage >= 33.33 && percentage <= 66.66,
      c: percentage > 66.66,
      half: percentage >= 50,
    };
  },

  illeagalArgument: (v) => {
    Object.assign(v, errorCode.illegalArgument);

    v.success = false;
    return v;
  },

  getResponseTeamplate: () => ({
    ...errorCode.normal,
    success: true,
    data: null,
  }),

  charSet: (response) => {
    response.writeHead(200, { 'Content-type': 'text/plain;charset=UTF-8' }); // 设置编码
  },
};
