-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, Categories.categoryname FROM Products
JOIN Categories ON Products.categoryid = categories.categoryid

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT orders.orderid, orderdetails.orderid, shippers.shippername FROM orders
JOIN orderdetails ON orders.orderid = orderdetails.orderid
JOIN Shippers on orders.shipperid = shippers.shipperid
WHERE orders.orderdate < "2012-08-09"
ORDER BY orderdate desc;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT orderid, orderdetails.productID, products.productname FROM orderdetails
JOIN products ON orderdetails.productid = products.productid
WHERE orderid = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
