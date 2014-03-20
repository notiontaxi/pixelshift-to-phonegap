/*
FileProcessor class

Florian Wokurka (2013)
https://github.com/notiontaxi
*/

"use strict"

define([], function() {

  var FileProcessor, module;
  module = function() {}
  FileProcessor = (function(){
// --------------------------------------


  function FileProcessor(){
    //this.reader = this.getFileReader()
  }



FileProcessor.prototype.captureImage = function(callback, callbackObj){

    this.callback = callback
    this.callbackObj = callbackObj

    var that = this

    var options = { 
          quality : 50
        , destinationType : Camera.DestinationType.DATA_URL
        , sourceType : Camera.PictureSourceType.CAMERA
        , allowEdit : false
        , encodingType: Camera.EncodingType.JPEG
      }

    navigator.camera.getPicture(
      function(imageData){
        that.loadFileFromFilesystem("data:image/jpeg;base64," + imageData, that)
      },
      this.onError,
      options
    )

  }

  FileProcessor.prototype.openImage = function(callback, callbackObj){

    this.callback = callback
    this.callbackObj = callbackObj

    var that = this

    var options = { 
          quality : 50
        , destinationType : Camera.DestinationType.DATA_URL
        , sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM
        , allowEdit : false
        , encodingType: Camera.EncodingType.JPEG
      }

    navigator.camera.getPicture(
      function(imageData){
        that.loadFileFromFilesystem("data:image/jpeg;base64," + imageData, that)
      },
      this.onError,
      options
    )

  }

  FileProcessor.prototype.onError = function(error){
    console.log(error)
  }

  FileProcessor.prototype.loadFileFromFilesystem = function(src, that){
    var img = new Image
    img.src = src
    img.onload = function() {
        console.log('image on loading')
        that.callback(img, that.callbackObj)
    }
  }

  


// --------------------------------------
    return FileProcessor
  })()
  return module.exports = FileProcessor
})
