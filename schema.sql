 
DROP DATABASE IF EXISTS Products;

CREATE DATABASE Products;

-- Makes it so all of the following code will affect bamazon_db --
USE Products;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  item_id INTEGER(20) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  department_name VARCHAR (30)NOT NULL
  -- Makes a sting column called "pet_name" --
  price INTEGER (100)NOT NULL
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER (100)
  PRIMARY KEY (id)
);

-

ysql> insert into products (name,department,price,quantity)
    -> values ("house","real estate",100000,2);
Query OK, 1 row affected (0.06 sec)

mysql> select * from products;
+----+--------------+--------------+--------+----------+
| id | name         | department   | price  | quantity |
+----+--------------+--------------+--------+----------+
|  1 | boomerang    | sports       |     11 |       50 |
|  2 | basketball   | sports       |     14 |      100 |
|  3 | NFL2K        | video games  |     50 |       25 |
|  4 | coffee maker | home         |     35 |       20 |
|  5 | computer     | electronics  |    500 |       15 |
|  6 | ring         | jewelery     |    999 |       13 |
|  7 | BJJGI        | martial arts |    140 |       50 |
|  8 | RayBans      | Apparel      |    100 |       65 |
|  9 | car          | dealership   |    200 |        1 |
| 10 | house        | real estate  | 100000 |        2 |
+----+--------------+--------------+--------+----------+
10 rows in set (0.00 sec)


ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '// Your username
  user: "root",

  // Your password
  password: "",
  database:' at line 1
mysql>
mysql>   password: admin
    ->   p
