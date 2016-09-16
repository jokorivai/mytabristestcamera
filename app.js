var page = new tabris.Page({
  title: 'Example App',
  topLevel: true
});

var button = new tabris.Button({
  centerX: 0, top: 10,
  text: 'Snap a Pic!'
}).appendTo(page);

var textView = new tabris.TextView({
  id: 'txtView',
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(page);

var img = new tabris.ImageView({
	id: "imgFoto",
	background: "rgb(220, 220, 220)",
	scaleMode: 'fit',
	// image: {src: 'images/001.jpg', scale: 1},
	layoutData: {left:10, top: '#txtView 10', right:10, height:200}
}).appendTo(page);

button.on('select', function() {
  navigator.camera.getPicture(function onSuccess(uri) {
		img.set('image', {src: uri, scale:1});
		textView.set('text', uri);
	}, function(msg){
		textView.set('text', 'Cancelled...');
	}, {
		targetWidth: 600
		, targetHeight: 400
		, destinationType: window.Camera.DestinationType.FILE_URI
		, sourceType: Camera.PictureSourceType.CAMERA
		, encodingType: Camera.EncodingType.JPEG
		, cameraDirection: Camera.Direction.BACK
		, quality: 30
		// , allowEdit: true
		// 
	});
});

page.open();
