/**
 * The application entry point
 * 
 */
'use strict';
console.log("Loading file:app.js ...");

var $=require("jquery");


$( document ).ready(function() {
    console.log( "ready!" );

	$("body").html("Hello real wolrd!");
});
