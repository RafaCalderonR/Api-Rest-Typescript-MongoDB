FROM mongo

 
COPY data-authors.json /data-authors.json
COPY data-books.json /data-books.json



CMD mongoimport --host mongodb --db library --collection books --type json --file ./data-books.json --jsonArray 



