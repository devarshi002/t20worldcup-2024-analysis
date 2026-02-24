import pandas as pd
from database import matches_collection

df= pd.read_csv("ICC_w2024.csv")

data= df.to_dict(orient="records")

#clear old data
matches_collection.delete_many({})

#insert new data
matches_collection.insert_many(data)

print("Data inserted into MongoDB successfully!")