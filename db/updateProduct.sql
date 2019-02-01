UPDATE product
SET price = $1
WHERE product_id = $2;

SELECT * FROM product;