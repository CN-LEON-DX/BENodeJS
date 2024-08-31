// [GET] /

module.exports.index = (req, res) => {
    // home page
    res.render("client/pages/home/index", {
        pageTitle: "Trang chủ"
    });
}