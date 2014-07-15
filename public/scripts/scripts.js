"use strict";function toggleOverlay(){overlay.hasClass("open")&&(overlay.removeClass("open"),overlay.addClass("close")),overlay.hasClass("close")||overlay.addClass("open")}function overlayReset(){overlay.removeClass("close")}function patternSet(a){var b=$(".application .tools .item.patterns .bar_slider").slider("value");b/=100,$("#messageIn").val(""),$("#map-content .pattern").remove(),$("#map-content").append('<div class="pattern '+a+'"></div>'),$("#map-content .pattern").fadeTo(150,b),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}function renderMap(a,b){var c={center:new google.maps.LatLng(a,b),zoom:8,maxZoom:9,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,rotateControl:!1,disableDefaultUI:!1},d=new google.maps.Map(document.getElementById("map"),c),e=function(a,b){return $("#imgZoom").val(b),$("#imgCent").val(d.center),urlIn+"/default/"+dateIn+"/"+googleLevel+"/"+b+"/"+a.y+"/"+a.x+".jpg"},f={alt:"MODIS_Terra_Aerosol",getTileUrl:e,maxZoom:zoomMax,minZoom:1,name:"MODIS_Terra_Aerosol",tileSize:new google.maps.Size(256,256),opacity:1},g=new google.maps.ImageMapType(f);d.overlayMapTypes.insertAt(0,g)}var date,typeSize="60px",shapeWidth,shapeHeight,shapeScale,globalFontStyle,mapContent,triggerBttn=$("#trigger-overlay"),overlay=$(".overlay"),closeBttn=$(".overlay-close");triggerBttn.click(function(){toggleOverlay()}),closeBttn.click(function(){toggleOverlay(),setTimeout(overlayReset,1e3)}),$(function(){$("#dateIn").datepicker({dateFormat:"yy-mm-dd"})}),$(".map-type .button").click(function(){var a=$(this).attr("data");$("#mapType").val(a),$(this).parent().find(".button").removeClass("active"),$(this).addClass("active")}),$("#modal1 .btn").click(function(){{var a=$("#dateIn").val(),b=new Date,c=b.getMonth().length+1===1?b.getMonth()+1:"0"+(b.getMonth()+1);b.getFullYear()+c+b.getDate(),a.replace(/\-/g,"")}}),$(".application .tools .item .title").click(function(){var a=$(this).parent();$("#text_color_picker, #shape_color_picker").spectrum("hide"),a.hasClass("active")?$(".application .tools .item").removeClass("active"):($(".application .tools .item").removeClass("active"),a.addClass("active"))}),$(function(){$(".application .tools .item.type .bar_slider").slider({value:60,min:8,max:120,step:2,range:"min",slide:function(a,b){var c=b.value+"px";$("#map-content .text-item.active").css("font-size",c),typeSize=c}})}),$("#text_color_picker").spectrum({color:"#f00",preferredFormat:"rgb",showInput:!1,clickoutFiresChange:!0,replacerClassName:"color-picker",showAlpha:!0,change:function(){var a=$("#text_color_picker").val();$("#map-content .text-item").hasClass("active")&&$("#map-content .text-item.active").css("color",a),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}}),$(".application .tools").scroll(function(){$("#text_color_picker").spectrum("hide")}),$("#add_text").click(function(){var a=$("#messageIn").val(),b=$(".text-item").length,c=$("#text_color_picker").spectrum("get"),d="normal",e="normal",f=$("#font-select").val();"regular"===globalFontStyle?(d="400",e="normal"):"bold"===globalFontStyle?(d="600",e="normal"):"italic"===globalFontStyle&&(d="400",e="italic"),$("#map-content .shape").removeClass("active"),""===a||void 0===a||null===a?alert("Please enter a value to be added to the canvas."):$("#map-content .text-item").hasClass("active")?alert("Please deselect your text item to add a new one."):(b=Number(b)+Number(1),$("#messageIn").val(""),$("#map-content .text-item").removeClass("active"),$("#map-content").append('<div class="text-item ui-draggable" id="text'+b+'" style="color: '+c+"; font-weight: "+d+"; font-style: "+e+"; font-size: "+typeSize+"; font-family: "+f+'"><span>'+a+'</span><div class="delete"></div></div>'),$("#text"+b).draggable(),$(".application .tools .item.type .bar_slider").slider("value","60")),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$(".application .tools .item.type .button").click(function(){var a=$(this).attr("data");$(this).parent().find(".button").removeClass("active"),$(this).addClass("active"),"regular"===a?(globalFontStyle="regular",$("#map-content .text-item").hasClass("active")&&$("#map-content .text-item.active").css({"font-weight":"400","font-style":"normal"})):"bold"===a?(globalFontStyle="bold",$("#map-content .text-item").hasClass("active")&&$("#map-content .text-item.active").css({"font-weight":"600","font-style":"normal"})):"italic"===a&&(globalFontStyle="italic",$("#map-content .text-item").hasClass("active")&&$("#map-content .text-item.active").css({"font-weight":"400","font-style":"italic"}))}),$("#font-select").change(function(){var a=$(this).val();$("#map-content .text-item.active").css({"font-family":a}),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$("#messageIn").keyup(function(){var a=$(this).val();$("#map-content .text-item").hasClass("active")&&(""===a?($("#map-content .text-item.active").remove(),$("#messageIn").val("")):$("#map-content .text-item.active span").text(a)),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$("#map-content").on("click",".text-item",function(){if($(this).hasClass("active"))$(this).removeClass("active"),$("#messageIn").val(""),$(".application .tools .item.type .bar_slider").slider("value","60");else{var a=$(this).text();$("#messageIn").val(a),$("#map-content .text-item").removeClass("active"),$(this).addClass("active"),typeSize=$(this).css("font-size"),typeSize=typeSize.slice(0,-2),$(".application .tools .item.type .bar_slider").slider("value",typeSize)}}),$("#map-content").on("click",".text-item .delete",function(){$("#messageIn").val(""),$(this).parent().fadeOut(150,function(){$(this).remove()})}),$(function(){$(".application .tools .item.objects .bar_sliderW").slider({value:100,min:1,max:600,step:1,range:"min",slide:function(a,b){var c=b.value+"px";$("#map-content .shape.active").css("width",c)}})}),$(function(){$(".application .tools .item.objects .bar_sliderH").slider({value:100,min:1,max:600,step:1,range:"min",slide:function(a,b){var c=b.value+"px";$("#map-content .shape.active").css("height",c)}})}),$(function(){$(".application .tools .item.objects .bar_sliderS").slider({value:50,min:1,max:600,step:1,range:"min",slide:function(a,b){var c=b.value+"px",d=b.value;$(".application .tools .item.objects .bar_sliderW").slider("value",d),$(".application .tools .item.objects .bar_sliderH").slider("value",d),$("#map-content .shape.active").css({height:c,width:c}),$("#map-content .shape.active").hasClass("circle-item")&&(d/=2,d+="px",$("#map-content .shape.active").css({"-webkit-border-radius":d,"-moz-border-radius":d,"-o-border-radius":d,"-ms-border-radius":d,"border-radius":d}))}})}),$("#shape_color_picker").spectrum({color:"#f00",preferredFormat:"rgb",showInput:!1,clickoutFiresChange:!0,replacerClassName:"button color-picker",showAlpha:!0,change:function(){var a=$("#shape_color_picker").val();$("#map-content .shape").hasClass("active")&&$("#map-content .shape.active").css("background-color",a),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}}),$(".application .tools").scroll(function(){$("#shape_color_picker").spectrum("hide")}),$("#add_square").click(function(){var a=$(".square-item").length,b=$("#shape_color_picker").spectrum("get");a=Number(a)+Number(1),$("#map-content .text-item, #map-content .shape").removeClass("active"),$("#messageIn").val(""),$("#map-content").append('<div class="square-item shape ui-draggable" id="square'+a+'" style="background-color: '+b+';"><div class="delete"></div></div>'),$("#square"+a).draggable(),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$("#add_circle").click(function(){var a=$(".square-item").length,b=$("#shape_color_picker").spectrum("get");a=Number(a)+Number(1),$("#map-content .text-item, #map-content .shape").removeClass("active"),$("#messageIn").val(""),$("#map-content").append('<div class="circle-item shape ui-draggable" id="circle'+a+'" style="background-color: '+b+';"><div class="delete"></div></div>'),$("#circle"+a).draggable(),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$("#map-content").on("click",".shape",function(){$("#messageIn").val(""),$(this).hasClass("active")?($(this).removeClass("active"),$(".application .tools .item.objects .bar_sliderW").slider("value","100"),$(".application .tools .item.objects .bar_sliderH").slider("value","100")):($("#map-content .text-item, #map-content .shape").removeClass("active"),$(this).addClass("active"),shapeWidth=$(this).css("width"),shapeWidth=shapeWidth.slice(0,-2),$(".application .tools .item.objects .bar_sliderW").slider("value",shapeWidth),shapeHeight=$(this).css("height"),shapeHeight=shapeHeight.slice(0,-2),$(".application .tools .item.objects .bar_sliderH").slider("value",shapeHeight))}),$("#map-content").on("click",".shape .delete",function(){$("#messageIn").val(""),$(this).parent().fadeOut(150,function(){$(this).remove()})}),$("#delete_shape").click(function(){$("#map-content .shape.active").remove(),$("#messageIn").val(""),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$(function(){$(".application .tools .item.patterns .bar_slider").slider({value:50,min:1,max:100,step:1,range:"min",slide:function(a,b){var c=b.value;c/=100,$("#map-content .pattern").stop().css("opacity",c)}})}),$(".application .tools .item.patterns .square.circles").click(function(){patternSet("circles")}),$(".application .tools .item.patterns .square.squares").click(function(){patternSet("squares")}),$(".application .tools .item.patterns .square.stripes").click(function(){patternSet("stripes")}),$("#delete-pattern").click(function(){$("#messageIn").val(""),$("#map-content .pattern").fadeOut(150,function(){$("#map-content .pattern").remove(),$(".application .tools .item.patterns .bar_slider").slider("value",50)}),$("#disable-canvas").hasClass("disabled")&&($("#disable-canvas").removeClass("disabled"),$("#disable-canvas").html("Hide Canvas"),$("#map-content").fadeIn(150))}),$("#disable-canvas").click(function(){$(this).hasClass("disabled")?($(this).removeClass("disabled"),$(this).html("Hide Canvas"),$("#map-content").fadeIn(150)):($(this).addClass("disabled"),$(this).html("Show Canvas"),$("#map-content").fadeOut(150))}),$(document).ready(function(){if($("body").hasClass("create")){var a,b,c=encodeURIComponent(mapLocation);$.ajax({url:"http://maps.google.com/maps/api/geocode/json?sensor=true&address="+c,cache:!1,crossDomain:!0,dataType:"json",success:function(c){console.log(c),a=c.results[1].geometry.location.lat,b=c.results[1].geometry.location.lng,renderMap(a,b),$("#ajax-loader").fadeOut(150)}})}if($("body").hasClass("share")){mapCenter=mapCenter.substr(1);var d=mapCenter.substr(0,mapCenter.length-1);d=d.split(",");var e={center:new google.maps.LatLng(d[0],d[1]),zoom:mapZoom,maxZoom:zoomMax,panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,rotateControl:!1},f=new google.maps.Map(document.getElementById("map"),e),g=function(a,b){return $("#imgZoom").val(b),$("#imgCent").val(f.center),urlIn+"/default/"+dateIn+"/"+googleLevel+"/"+b+"/"+a.y+"/"+a.x+".jpg"},h={alt:"MODIS_Terra_Aerosol",getTileUrl:g,maxZoom:zoomMax,minZoom:1,name:"MODIS_Terra_Aerosol",tileSize:new google.maps.Size(256,256),opacity:1},i=new google.maps.ImageMapType(h);f.overlayMapTypes.insertAt(0,i),$("#ajax-loader").fadeOut(150)}}),$("#save-map").click(function(){$("#map-content .background").remove(),$("#map-content .text-item, #map-content .shape").removeClass("active ui-draggable"),$("#map-content .text-item .delete, #map-content .shape .delete").remove(),mapContent=$("#map-content").html(),$("#formMapContent").val(mapContent),$("#map-creation").submit()}),$(document).ready(function(){setTimeout(function(){$(".notification").animate({opacity:"0",top:"-100px"},400,function(){$(".notification").remove()})},3e3)}),$("#share-now").click(function(){return $(".share-overlay").fadeIn(300),!1}),$(".addthis_toolbox a, .close_navigation").click(function(){return $(".share-overlay").fadeOut(300),!1});