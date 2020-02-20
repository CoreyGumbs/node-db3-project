-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, Category.categoryname FROM Product
JOIN Category ON Product.categoryid = category.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT id, shipper.companyname FROM [order] as o
INNER JOIN shipper ON o.shipvia = shipper.id
WHERE o.orderdate < "2012-08-09"
ORDER BY o.orderdate desc;


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.productname, orderdetail.quantity From orderdetail
JOIN product ON orderdetail.productid = product.id
WHERE orderid = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id, customer.companyname, employee.lastname FROM [order] as o
INNER JOIN customer ON o.customerid = customer.id
INNER JOIN employee ON o.employeeid = employee.id;