var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
      title: 'Article One | Moorthy Gabbita',
      heading: 'Aricle One',
      date: 'July 30, 2017',
      content: `
        <p>
                This is the modified content of the First Article. This is the content of the First Article. This is the content of the First Article.
                This is the modified content of the First Article. This is the content of the First Article. 
                This is the content of the First Article. 
            </p>
            <p>
                This is the content of the First Article. This is the content of the First Article. This is the content of the First Article.
                This is the content of the First Article. This is the content of the First Article. 
                This is the content of the First Article. 
            </p>
            <p>
                This is the content of the First Article. This is the content of the First Article. This is the content of the First Article.
                This is the content of the First Article. This is the content of the First Article. 
                This is the content of the First Article. 
        </p>`
    },
    'article-two': {
      title: 'Article Two | Jaggu',
      heading: 'Aricle Two',
      date: 'August 04, 2017',
      content: `
        <p>
                This is the second Article. This is the Second Article. This is the Second Article.
                This is the second Article. This is the Second Article. This is the Second Article.
                This is the second Article. This is the Second Article. This is the Second Article.
            </p>
            <p>
                This is the second Article. This is the Second Article. This is the Second Article.
                This is the second Article. This is the Second Article. This is the Second Article.
                This is the second Article. This is the Second Article. This is the Second Article.

            </p>`
    },
    'article-three': {
      title: 'Article Three | Mo Gab',
      heading: 'Aricle Three',
      date: 'August 06, 2017',
      content: `
        <p>
                This is the new Third Article. This is the new Third Article. This is the new Third Article.
                This is the 3rd Article. This is the 3rd Article. This is the 3rd Article.
            </p>
            <p>
                This is the new Third Article. This is the new Third Article. This is the new Third Article.
                This is the 3rd Article. This is the 3rd Article. This is the 3rd Article.

            </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
