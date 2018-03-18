var deviceToken = 'f74f0d895a22249e75057c91e90543b5f5039cb5dd3880f9b4506b705680ceab';
var apn = require('apn');
var join = require('path').join
  , pfx = join(__dirname, '/simplertapp-certificates.p12');

var options = {
  pfx: pfx,
  passphrase: 'fede123',
  production: false
};

var apnProvider = new apn.Provider(options);

let notification = new apn.Notification();
notification.alert = "Hello, world!";
notification.badge = 1;
notification.category = "GENERAL";
notification.payload = {
	tweetId: 1423
}
// notification.topic = "io.github.node-apn.test-app";

apnProvider.send(notification, [deviceToken]).then( (response) => {
		// response.sent: Array of device tokens to which the notification was sent succesfully
		// response.failed: Array of objects containing the device token (`device`) and either an `error`, or a `status` and `response` from the API
		// console.log("successfull device tokens: " + response.sent);
		// console.log("failed device tokens: " + response.failed[0].response.reason);
		process.exit();
});