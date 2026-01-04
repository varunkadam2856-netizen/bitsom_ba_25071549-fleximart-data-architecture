import os
import pandas as pd

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
DATA_DIR = os.path.join(PROJECT_ROOT, "data")

customers_file = os.path.join(DATA_DIR, "customers_raw.csv")
products_file  = os.path.join(DATA_DIR, "products_raw.csv")
sales_file     = os.path.join(DATA_DIR, "sales_raw.csv")

print("Script dir :", SCRIPT_DIR)
print("Project root:", PROJECT_ROOT)
print("Data dir   :", DATA_DIR)

for f in [customers_file, products_file, sales_file]:
    if not os.path.exists(f):
        raise FileNotFoundError(f"Missing file: {f}")

print("✅ All input files found")

customers_df = pd.read_csv(customers_file)
products_df  = pd.read_csv(products_file)
sales_df     = pd.read_csv(sales_file)

print("✅ Customers records:", len(customers_df))
print("✅ Products records :", len(products_df))
print("✅ Sales records    :", len(sales_df))

report_path = os.path.join(PROJECT_ROOT, "data_quality_report.txt")


with open(report_path, "w") as f:
    f.write("DATA QUALITY REPORT\n")
    f.write("===================\n\n")

    f.write(f"Customers records: {len(customers_df)}\n")
    f.write(f"Products records : {len(products_df)}\n")
    f.write(f"Sales records    : {len(sales_df)}\n\n")

    f.write("Missing values check:\n")
    f.write(f"Customers missing values:\n{customers_df.isnull().sum()}\n\n")
    f.write(f"Products missing values:\n{products_df.isnull().sum()}\n\n")
    f.write(f"Sales missing values:\n{sales_df.isnull().sum()}\n")
