from pymongo import MongoClient

# Connect to the MongoDB server
client = MongoClient("mongodb://localhost:27017")

# Access the database and collection
db = client["your_database_name"]
orders_collection = db["Orders"]

# Query the most recent order
most_recent_order = orders_collection.find_one({}, sort=[("order_date", -1)])

# Print the most recent order details
print("Most Recent Order:")
print("Order ID:", most_recent_order["order_id"])
print("Order Date:", most_recent_order["order_date"])
# Add more fields from your "Orders" table as needed