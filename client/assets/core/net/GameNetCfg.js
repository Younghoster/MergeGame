//测试服务器配置
const DebugNetCfg = {
    httpHost: '192.168.0.105',
    httpPort: 9001
};

module.exports = {
    getHttpUrl() {
        let httpUrl = 'http://' + DebugNetCfg.httpHost + ':' + DebugNetCfg.httpPort;
        return httpUrl;
    }
};