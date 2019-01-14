var MainModule =  angular.module("MainModule", ["ngRoute","ngAnimate"]);

MainModule.config(function($routeProvider){
	$routeProvider
		.when("/books",
		{
			templateUrl:"views/booklist.html",
			controller: "BookListCtrl"
		})
		.when("/kart",
		{
			templateUrl:"views/kartlist.html",
			controller: "KartListCtrl"
		})
		.when("/payment",
		{
			templateUrl:"views/payment.html",
			controller: "KartListCtrl"
		})
		.otherwise({
			redirectTo: "/books"
		});
});

MainModule.factory("bookService", function(){
	var books = [
		{
			bookId:145,
			order: 0,
			imgURL : "imgs/EVO_Logo.png",
			name : "Two States",
			price: 300,
			rating: 4,
			binding: "Paperback",
			publisher: "Praveen",
			releaseDate: "01-01-2019",
			details : "This Book is written by Praveen"
		},
		{
			bookId:356,
			order: 1,
			imgURL : "imgs/EVO_Logo.png",
			name : "Ponniyin Selvan",
			price: 400,
			rating: 4,
			binding: "Paperback",
			publisher: "Vignesh",
			releaseDate: "01-01-2018",
			details : "This Book is written by Vignesh"
		},
		{
			bookId:100,
			order: 2,
			imgURL : "imgs/EVO_Logo.png",
			name : "Thirukural",
			price: 500,
			rating: 4,
			binding: "Paperback",
			publisher: "Thiruvalluvar",
			releaseDate: "01-01-2000",
			details : "This Book is written by Thiruvalluvar"
		}	
	];
	
	return {
		getBooks: function(){
			return books;
		}
	}
	
});

MainModule.factory("kartService", function(){
	var kartList = [];
	var purchaseList = [];
	return {
		getKartList: function(){
			return kartList;
		},
		getPurchaseList: function(){
			return purchaseList;
		},
		addToKart: function(book){
			
			if(kartList.indexOf(book) !== -1) {
				alert("This book is already added to the Kart");
			}
			else{
				kartList.push(book);
				alert("Book added to Kart");
			}
		},
		buy: function(book){
			// alert("Thanks for buying "+book.name);
			if(purchaseList.indexOf(book) !== -1) {
				alert("This book is already added to the PurchaseList");
			}
			else{
				purchaseList.push(book);
				alert("Book added to PurchaseList");
			}
			// $('#myModal').modal('show');
		},
		getTotalPrice: function(){
			angular.forEach(purchaseList, function () {
				
			});
		},
		removeFromKart: function(book){
			var ind = kartList.indexOf(book);
			kartList.splice(ind,1);
			alert("Book removed from Kart");
		}
	}
});

MainModule.controller("HeaderCtrl", function($scope){
	$scope.logo = "BooksArt";
	$scope.appDetails = {};
	$scope.appDetails.title = "Bookart";
	$scope.appDetails.tagline = "Explore 1 million Books here";
});

MainModule.controller("BookListCtrl", function($scope, bookService, kartService){
	$scope.books = bookService.getBooks();
	$scope.addToKart = function(book){
		kartService.addToKart(book);
	}
});

MainModule.controller("KartListCtrl", function($scope, kartService){
	$scope.kartlist = kartService.getKartList();
	$scope.purchaseList = kartService.getPurchaseList();
	$scope.buy = function(book){
		kartService.buy(book);
	}
	$scope.removeFromKart = function(book){
		kartService.removeFromKart(book);
	}
});
