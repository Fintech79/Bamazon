var mySql = require("mysql");

var config = {
	host: "localhost",
	port: 3306,
  // username
  user: "root",
   // user password
   password: "admin",
   database: "Bamazon"
};
var connection = mySql.createConnection(config);

var callback = function(err){
	if (err) throw err;
	console.log('connection succesful');

	displayItems();
};
// syyhdfhdf
connection.connect(callback)
//displayItems();

function displayItems(){
	// assumes mysql connection made
	connection.query("SELECT * FROM Bamazon", function (err, result) {
    	if (err) throw err;
    	console.log(result);
	});// get items for sale from database
	
		//runSearch();
}
	
function runSearch() {
		var promise = inquirer.prompt({
			name: "action",
			type: "rawlist",
			message: "What is your selection?",
			choices: [
			"Find product by id",
			"How much quantitiy of the product would you like to purchase?",
			]
		});
		// output for sale items
		promise.then(function(result) {
			switch (result.action) {
				case "Find product by id":
				productSearch();
				break;

				case "How much quantitiy of the product would you like to purchase?":
				AddProduct();
				break;



			}

		})
		.catch(function(){
			coconsole.log(err)
		})
		.finally(function(){
			console.error('user didnt make a choice')
		})
}
//function require inquierer

function productSearch() {
	inquirer
	.prompt({
		name: "product",
		type: "input",
		message: "What is your selection?"
	})
	.then(function(answer) {
		var query = "SELECT * FROM products WHERE name=  ",function(err,res) {
			for (var i = 0; i < res.length; i++) {
				console.log("Position: " + res[i].product + " || productID: " + res[i]. + 
					" || quantitiy: " + res[i].product);
			}
			runSearch();
		};
	});
}

function AddProduct() {
	var query = "SELECT item FROM product WHERE count(*) > 1";
	connection.query(query, function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].product);
			if error throw (err)
				console.log('How much of the product would you like to purchase'),
		}
		runSearch();
	});
}




