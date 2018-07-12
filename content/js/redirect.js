
redirect = {
    destination: function (target) {
        console.log(target);
        console.log(config.getProperty(target));
        return config.getProperty(target);
    },
    goto: function () {
        var url = new URL(window.location.href);
        var target = url.searchParams.get("go");
        console.log(this.destination(target));
        //window.location.replace(this.destination(target));
    }
}