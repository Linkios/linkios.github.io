config = {
    getProperty: function (key) {
        messageResource.init({
            // path to directory containing config.properties
            filePath: 'content/config/',
            debugMode: true
        });
        messageResource.load('config', function(){
            console.log(messageResource.get(key, 'config'));
        });
        return messageResource.get(key, 'config');
    }
}