/*
Class for contrast manipulation

Florian Wokurka (2013)
https://github.com/notiontaxi
*/

"use strict"

define(['text!templates/task-contrast.html','js/strategies/ImageProcessingMenubarStrategy'], function(contentTemplate, ImageProcessingMenubarStrategy) {

var ContrastStrategy, _ref, module,


  module = function() {}
  ContrastStrategy = (function(_super){
  __extends(ContrastStrategy, ImageProcessingMenubarStrategy)
// --------------------------------------

  ContrastStrategy.NAME = 'contrast'
  ContrastStrategy.LABEL = 'Contrast'

    function ContrastStrategy(canvases, imageProcessor){
      this.name = ContrastStrategy.NAME
      this.label = ContrastStrategy.LABEL
      this.menuTyp = ImageProcessingMenubarStrategy.MENU_TYP_FILTER
      ContrastStrategy.__super__.constructor(canvases, imageProcessor)

      this.minValue = -255
      this.maxValue = 255  

      // render templates
      $(".controls-wrapper").append($(contentTemplate))
      // TODO: cleanup init timings
      this.init()
      this.currentValue = 0
      this.changed = false
      this.onChangeAction = null      
    }

    ContrastStrategy.prototype.initializeTools = function(){
      this.initializeDefaultSlider(ContrastStrategy.NAME, 0, this.minValue, this.maxValue)
    }

    ContrastStrategy.prototype.execute = function(imgData, preview){

      if(!imgData)
        var imgData = this.canvasOrigin.getImageData()

      this.processedImageData = this.imageProcessor.processContrast(imgData, this.currentValue)

      if(!preview){
        this.canvasOrigin.putImageData(this.processedImageData)
        this.updateAllStrategies(this.canvasOrigin.getImageData(), true)
      }
    }






// --------------------------------------
    return ContrastStrategy
  })()
  return module.exports = ContrastStrategy
})