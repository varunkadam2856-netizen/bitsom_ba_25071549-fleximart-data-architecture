# FlexiMart Data Architecture Project

This repository contains the implementation of an end-to-end data architecture for the FlexiMart retail dataset. The project covers ETL processing, NoSQL operations, and data warehouse design with analytical queries.

---

## Project Overview

The objective of this project is to design and implement a scalable data architecture that supports transactional data processing as well as analytical reporting. The solution includes:

- ETL pipeline for raw data processing
- Data quality checks
- NoSQL (MongoDB) operations
- Star schema–based data warehouse design
- SQL queries for business analysis

---

## Folder Structure

├── data/
│ ├── customers_raw.csv
│ ├── products_raw.csv
│ └── sales_raw.csv
├── script/
│ └── etl_pipeline.py
├── mongodb_operations.js
├── nosql_analysis.md
├── business_queries.sql
├── data_quality_report.txt


---

## ETL Pipeline

- Raw CSV files are loaded from the `data/` folder
- Data cleaning and transformations are performed using Python
- Data quality checks are documented in `data_quality_report.txt`
- Processed data is prepared for warehouse loading

---

## NoSQL Implementation

- MongoDB operations are implemented in `mongodb_operations.js`
- Queries include insert, update, aggregation, and indexing
- Design decisions and analysis are documented in `nosql_analysis.md`

---

## Data Warehouse Design

- A star schema is used for analytical efficiency
- Fact table stores sales transactions at line-item level
- Dimension tables include customer, product, and date attributes
- SQL analytical queries are written in `business_queries.sql`

---

## Technologies Used

- Python
- SQL
- MongoDB
- Git & GitHub

---

## Author

Varun Kadam  
Student ID: bitsom_ba_25071549
