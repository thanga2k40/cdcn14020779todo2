var config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost/apitodo",
	test_port: 2001,
	test_db: "mongodb://localhost/apitodo_test"
}
module.exports = config;
