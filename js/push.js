document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    //alert("device ready")
    if (typeof PushNotification != 'undefined') {
        var push = PushNotification.init({"android": {"senderID": "713837838534", "forceShow": "true"}});
        
        push.on('registration', function(data) {
$("#imgURL").val((JSON.stringify(data)))            
        });
        
        push.on('notification', function(data) {
            alert(data.title+"\n"+data.message);
            // data.message, data.title, data.count, data.sound, data.image, data.additionalData
        });
        
        push.on('error', function(e) {
            alert(JSON.stringify(e))
            // e.message
        });
    }
    else {
        alert("PushNotification is undefined");
    }
}
