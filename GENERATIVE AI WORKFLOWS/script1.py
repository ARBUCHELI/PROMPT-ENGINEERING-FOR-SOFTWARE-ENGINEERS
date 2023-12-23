from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient("mongodb://localhost:27017")

# Access the database and collection
db = client["company_database"]
orders_collection = db["Orders"]

# Change this line to find three orders
most_recent_orders = orders_collection.find().sort("purchase_date", -1).limit(3)

# Change these lines to print the three most recent order details
for order in most_recent_orders:
print("Most Recent Order:")
print("Order ID:", most_recent_order["order_id"])
print("Purchase Date:", most_recent_order["purchase_date"])