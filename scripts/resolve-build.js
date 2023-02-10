const path = require("path");
const fs = require('fs');
const fileName = path.join(__dirname, "../build/index.html");
if (fs.existsSync(fileName))
{
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err)
            return console.log(err);
        var result = data.replace("/static/js", 'static/js').replace("/static/css", "static/css");
        fs.writeFile(fileName, result, 'utf8', function (err) {
            if (err) return console.log(err);
        });
    });
}
