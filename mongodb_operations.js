/*
  mongodb_operations.js
  This file demonstrates basic MongoDB operations for the FlexiMart project.
  The purpose is to show how NoSQL can handle flexible product data.
*/

const { MongoClient } = require("mongodb");

// Connection URL and database name
const url = "mongodb://localhost:27017";
const dbName = "fleximart_nosql";

async function runMongoOperations() {
    const client = new MongoClient(url);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const productsCollection = db.collection("products");

        // 1. Insert a product with flexible schema
        const product = {
            product_id: "P101",
            name: "Laptop",
            category: "Electronics",
            specs: {
                ram: "16GB",
                processor: "Intel i7",
                storage: "512GB SSD"
            },
            price: 50000,
            reviews: [
                { user: "John", rating: 5, comment: "Excellent performance" },
                { user: "Amit", rating: 4, comment: "Good value for money" }
            ]
        };

        await productsCollection.insertOne(product);
        console.log("Product inserted");

        // 2. Find products by category
        const electronicsProducts = await productsCollection
            .find({ category: "Electronics" })
            .toArray();

        console.log("Electronics products:", electronicsProducts);

        // 3. Update product price
        await productsCollection.updateOne(
            { product_id: "P101" },
            { $set: { price: 48000 } }
        );

        console.log("Product price updated");

        // 4. Aggregate: Average rating per product
        const avgRatings = await productsCollection.aggregate([
            { $unwind: "$reviews" },
            {
                $group: {
                    _id: "$product_id",
                    averageRating: { $avg: "$reviews.rating" }
                }
            }
        ]).toArray();

        console.log("Average ratings:", avgRatings);

    } catch (error) {
        console.error("Error performing MongoDB operations:", error);
    } finally {
        await client.close();
    }
}

// Function call (for demonstration)
runMongoOperations();
