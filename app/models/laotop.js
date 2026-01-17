laotop.getAll = result => {
    sql.query("select * from laotop", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }
        console.log("laotop: ", res);
        result(null, res)
    })
};

module.exports = laotop;