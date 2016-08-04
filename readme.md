# scaffolding-gulp-jquery-bootstrap-mocha

This is am empty projects that uses the following tools:
* Gulp
* Boostrap
* Fontawesome
* Mocha, chai



npm install --save-dev gulp

npm install --save-dev del
npm install --save-dev jshint gulp-jshint

npm install --save-dev gulp-if
npm install --save-dev gulp-notify
npm install --save-dev browser-sync 
npm install --save-dev gulp-autoprefixer

npm install --save-dev gulp-less
npm install --save-dev gulp-sourcemaps
npm install --save-dev gulp-clean-css
npm install --save-dev less-plugin-autoprefix
npm install --save-dev run-sequence
npm install --save-dev gulp-ejs

npm install --save-dev proxy-middleware
npm install --save-dev gulp-util

npm install --save-dev vinyl-source-stream vinyl-buffer watchify
npm install --save-dev browserify-shim 
npm install --save-dev brfs

#
# Project estructure and configuration
#

dist/ : The distributions folder
app/ The application

app/ejs/: Every thing here is parsed width ejs
app/styles/


# Preject dependencies
npm install --save font-awesome
npm install --save jquery
npm install --save q
npm install mustache --save
npm install htmlclean --save



## GIT
see install.sh
    

```
git clone https://github.com/ginere/scaffolding-gulp-jquery-bootstrap-mocha.git
git add readme.md
git commit -m "first commit"
git push -u origin master
git remote set-url origin https://ginere@github.com/ginere/scaffolding-gulp-jquery-bootstrap-mocha.git
```
    
...or create a new repository on the command line
```
echo "# scaffolding-gulp-jquery-bootstrap-mocha" >> README.md
git init
git add readme.md
git commit -m "first commit"
git remote add origin https://User:PASS@github.com/ginere/scaffolding-gulp-jquery-bootstrap-mocha.git
git push -u origin master
```


...or push an existing repository from the command line
```
git remote add origin https://github.com/ginere/scaffolding-gulp-jquery-bootstrap-mocha.git
git push -u origin master
```
