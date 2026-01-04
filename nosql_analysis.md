# NoSQL Justification Report

## Section A: Limitations of RDBMS (Relational Databases)

Relational databases like MySQL work best when data follows a fixed and well-structured format. In the case of FlexiMart, products belong to different categories and each category has different attributes. For example, electronic items like laptops require specifications such as RAM, processor, and storage, while clothing items need attributes like size, color, and fabric type. Handling such variations in an RDBMS would require multiple tables or frequent schema changes, which increases complexity.
Another major limitation is frequent schema modification. When new product types are introduced, ALTER TABLE operations are required, which are time-consuming and risky for large datasets. This reduces flexibility and slows down development. Additionally, storing customer reviews as nested data is difficult in relational databases. Reviews usually need to be stored in separate tables and retrieved using joins, which makes queries more complex and impacts performance. Due to these limitations, RDBMS is not ideal for highly dynamic product catalogs.

## Section B: NoSQL Benefits (MongoDB)

MongoDB solves these problems by using a flexible, document-based schema. Each product is stored as a JSON-like document, allowing different products to have different attributes without changing the database structure. This makes it easier to manage multiple product categories such as electronics and fashion within a single collection.
MongoDB also supports embedded documents, which allows customer reviews to be stored directly inside the product document. This reduces the need for joins and improves read performance when fetching product details along with reviews. In addition, MongoDB provides horizontal scalability through sharding. As FlexiMart’s data grows, MongoDB can distribute data across multiple servers, ensuring better performance and availability. These features make MongoDB suitable for applications with changing data requirements.

## Section C: Trade-offs of Using MongoDB

One disadvantage of using MongoDB instead of MySQL is weaker support for complex multi-table transactions. Although MongoDB supports transactions, they are generally less efficient compared to traditional relational databases.
Another drawback is the lack of strict schema enforcement. Since MongoDB allows flexible schemas, improper validation at the application level can lead to inconsistent or duplicate data if not handled carefully.
