redirect = {
    goto: function () {
        var url = new URL(window.location.href);
        var key = url.searchParams.get("go");
        if (key == null) {
            key = 'home';
        }
        messageResource.init({
            filePath: 'content/config/'
        });
        messageResource.load('config', function () {
            var target = messageResource.get(key, 'config');
            console.log(target);
            window.location.replace(target);
        });
    }
}