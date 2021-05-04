-- A
SELECT * FROM customer WHERE gender='female';

-- B
SELECT customer.first_name, COUNT(order.fk_customer) FROM customer
INNER JOIN order ON customer.id=order.fk_customer
GROUP BY customer.first_name;

-- C
SELECT customer.first_name, SUM(order.sum) FROM customer
INNER JOIN order ON customer.id=order.fk_customer
GROUP BY customer.first_name;

-- D
SELECT order.order_nr FROM order
INNER JOIN order_item ON order.id=order_item.fk_order 
HAVING COUNT(order.fk_order) >= 2;
