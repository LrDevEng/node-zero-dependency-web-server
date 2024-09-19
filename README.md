# node-zero-dependency-web-server

Simple web server running on localhost port 3000. Built by only using the node.js standard library.
Server handles http get request from client and provides files located in the directory 'public'.

# Usage

Run the following command in your terminal to start the server:
```
node index.js
```

# Example Requests
1. http://localhost:3000/ returns the file index.html located in the directory './public'
2. http://localhost:3000/index.css returns the file index.css located in the directory './public'
3. http://localhost:3000/resources/smiley.jpg returns the file smiley.jpg located in the directory './public/resources'


# Supported Files

- .html
- .htm
- .css
- .js
- .txt
- .jpg
- .jpeg
- .gif
- .png
- .svg
