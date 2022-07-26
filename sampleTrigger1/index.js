const {setTimeout} = require("timers/promises");

module.exports = async function (context, req) {
    const startTime = new Date();
    context.log('JavaScript HTTP trigger function processed a request.');

    // HTTPトリガーが230秒で502となることを確認するテスト
    // 一定時間止まって、定期的にログを出力することを指定回数実施する
    for(let i = 0; i < 270; i++) {
        await setTimeout(1000);
        context.log(`Waiting... ${i}`);
    }

    const responseMessage = `startTime = ${startTime}, endTime = ${new Date()}`;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
