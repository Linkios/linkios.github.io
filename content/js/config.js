config = {
    getProperty: function (key) {
        messageResource.init({
            filePath: 'content/config/',
            debugMode: true
        });
        messageResource.load('config', function(){
            console.log(messageResource.get(key, 'config'));
        });
        return messageResource.get(key, 'config');
    }
}