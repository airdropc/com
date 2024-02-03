function makeid(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   // 0xb6204727......a51b4e9c27
   return result;
}
$(document).ready(function () {

   $.notify.addStyle('transaction', {
      html:
          "<div>" +
            "<div class='clearfix'>" +
               "<div class='title' data-notify-html='title'/>" +
               "<div class='wallet' data-notify-text='wallet' />" +
            "</div>" +
          "</div>"
   });

   setInterval(function(){
      const walletNumber = '0x' + makeid(8) + '......' + makeid(10);
      $.notify({
         title: 'Transaction success',
         wallet: walletNumber
      }, {
         style: 'transaction'
      });
   }, 15000);

   var ua = detect.parse(navigator.userAgent);
   $("html").addClass(ua.device.type + " " + ua.device.family + " " + ua.os.family + " " + ua.browser.family)

   $(".menuBtn").on("click", function () {
      if ($("header").length > 0) {
         $(".menuBtn").toggleClass("selected")
         $(".menuBl").toggleClass("open").slideToggle(200)
      }
      if ($(".lkPage").length > 0) {
         $(".menuBtn").toggleClass("selected")
         $(".menuBl").toggleClass("open").slideToggle(200)
      }
   })

   if ($(".sliderWhy").length > 0) {
      $('.sliderWhy').on('init', function (event, slick, currentSlide, nextSlide) {
         dotsWithSliders(".sliderWhy")
      });
      $('.sliderWhy').on('setPosition', function (event, slick, currentSlide, nextSlide) {
         dotsWithSliders(".sliderWhy")
      });
      $('.sliderWhy').slick({
         infinite: false,
         dots: true,
         centerPadding: '30px',
         slidesToShow: 4,
         slidesToScroll: 4,
         // variableWidth: true,
         responsive: [{
            breakpoint: 1700,
            settings: {
               infinite: false,
               slidesToShow: 3,
               slidesToScroll: 3,
               dots: true
            }
         },
         {
            breakpoint: 1200,
            settings: {
               infinite: false,
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               infinite: false,
               centerPadding: '0px',
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: false
            }
         },
         ]
      });
   }

   if ($(".sliderInvest").length > 0) {

      $('.sliderInvest').on('beforeChange', function () {
         removeClassSliderInvest()
         setTimeout(function () {
            addClassSliderInvest()
         }, 100);
      });

      $('.sliderInvest').on('init', function () {
         dotsWithSliders(".sliderInvest")
      });

      $('.sliderInvest').on('setPosition', function () {
         dotsWithSliders(".sliderInvest")
      });

      $('.sliderInvest').slick({
         infinite: false,
         dots: true,
         slidesToShow: 5,
         slidesToScroll: 5,
         // variableWidth: true,
         responsive: [{
            breakpoint: 1400,
            settings: {
               infinite: false,
               slidesToShow: 3,
               slidesToScroll: 1,
               dots: true
            }
         },
         {
            breakpoint: 992,
            settings: {
               infinite: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               infinite: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               dots: false
            }
         },
         {
            breakpoint: 640,
            settings: {
               infinite: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: false
            }
         }
         ]
      });

      addClassSliderInvest();

   }

   if ($(".sliderLkPlan").length > 0) {
      $('.sliderLkPlan').slick({
         infinite: false,
         dots: true,
         slidesToShow: 3,
         slidesToScroll: 3,
         variableWidth: true,
         responsive: [{
            breakpoint: 1599,
            settings: {
               dots: false,
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 1199,
            settings: {
               dots: false,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 639,
            settings: {
               dots: false,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }
         ]
      });
   }

   if ($(".sliderProspect").length > 0) {

      $('.sliderProspect').on('init', function () {
         dotsWithSliders(".sliderProspect")
      });

      $('.sliderProspect').on('setPosition', function () {
         dotsWithSliders(".sliderProspect")
      });

      $('.sliderProspect').slick({
         infinite: false,
         dots: true,
         slidesToShow: 4,
         slidesToScroll: 4,
         // variableWidth: true,
         responsive: [{
            breakpoint: 1700,
            settings: {
               infinite: false,
               slidesToShow: 3,
               slidesToScroll: 3,
               dots: true
            }
         },
         {
            breakpoint: 1200,
            settings: {
               infinite: false,
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               infinite: false,
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: false
            }
         },

         ]
      });
   }

   if ($(".sliderinvestor").length > 0) {
      $('.sliderinvestor').slick({
         infinite: false,
         dots: true,
         centerMode: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
         responsive: [{
            breakpoint: 991,
            settings: {
               items: 1,
               infinite: false,
               dots: false,
               initialSlide: 1,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         ]
      });
   }

   if ($(".sliderNews").length > 0) {
      $('.sliderNews').slick({
         infinite: false,
         dots: true,
         slidesToShow: 2,
         slidesToScroll: 2,
         variableWidth: true,
         responsive: [{
            breakpoint: 992,
            settings: {
               infinite: false,
               arrows: false,
               dots: false,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },
         ]
      });
   }

   if ($(".sliderNewsBig").length > 0) {
      $('.sliderNewsBig').slick({
         infinite: false,
         initialSlide: 1,
         dots: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         variableWidth: true,
         responsive: [{
            breakpoint: 991,
            settings: {
               variableWidth: false,
               dots: false,
            }
         },
         ]
      });
   }

   if ($(".faqList").length > 0) {
      var timeOut = false;
      $(".faqList .quest").click(function () {
         if (timeOut) return false;
         $(this).toggleClass("open").parents('.item').toggleClass("open").find(".answer").slideToggle();
         timeOut = true;
         setTimeout(function () {
            timeOut = false;
         }, 500);
      })
   }

   if ($(".listInput").length > 0) {
      $(".inputLine input").each(function (i, input) {
         if (!input.value.length) return;
         $(input).parents(".inputLine").addClass("valueTrue")
      })
      $('.inputLine input').blur(function () {
         var val = $(this).val()
         if (val.length >= 1) {
            $(this).parents(".inputLine").addClass("valueTrue")
         } else {
            $(this).parents(".inputLine").removeClass("valueTrue")
         }
      })
   }

   if ($(".tabs").length > 0) {
      $(".tabs").map(function () {
         $(this).tabs({
            active: 0,
            show: 300,
            hide: 300
         });
      })
   }

   if ($(".settingsTabs").length > 0) {
      $(".settingsTabs").map(function () {
         $(this).tabs({
            show: 300,
            hide: 300
         });
         $(window).scrollTop(0);
      })


      $('.settingsTabs .listLinks a').map(function (index) {

         $(this).on('click', function (event) {
            event.preventDefault();

            if ($(this).parents('.settingsTabs').length > 0) {
               window.location.hash = $(this).attr('href');
               $(window).scrollTop(0);
            }

            var el = $(this),
               tabs = el.parents('.settingsTabs'),
               tabContent = tabs.find('.tabsBody').eq(index);

            if (!$(this).hasClass('active')) {
               el.addClass('active').siblings("a").removeClass('active');
               tabContent.addClass('active').siblings('.tabsBody').removeClass('active');
            }
         })
      })

      $(window).bind('load', function () {
         $(window).scrollTop(0);
      });

   }

   if ($(".clockBl").length > 0) {
      clock()
   }

   if ($(".copyRef").length > 0) {
      new ClipboardJS('.copyRef');
   }

   if ($(".selectricBl").length > 0) {
      $(".selectricBl").map(function () {
         $(this).selectric();
      })

      $('.selectricPic').selectric({
         arrowButtonMarkup: '<span class="icon icon-arrow-down"></span>',
         labelBuilder: function (itemData, element, index) {
            return $(itemData.element[0]).attr('placeholder') ?
               '<span class="placeholder">' + itemData.text + '</span>' :
               $(itemData.element[0]).attr('data-image') !== undefined ?
                  '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
                  itemData.text;
         },
         optionsItemBuilder: function (itemData) {
            return $(itemData.element[0]).attr('data-image') !== undefined ?
               '<span class="payIcon" style="background-image: url(' + $(itemData.element[0]).attr('data-image') + ');"></span>' + itemData.text :
               itemData.text;
         }
      })
   }

   if ($(".filterBl").length > 0) {
      var dateFormat = "dd.mm.yy",
         from = $("#from")
            .datepicker({
               defaultDate: "+1w",
               changeMonth: true,
               numberOfMonths: 1,
               dateFormat: "dd.mm.yy"
            })
            .on("change", function () {
               to.datepicker("option", "minDate", getDate(this));
            }),
         to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            sliderCurrentsOfMonths: 1,
            dateFormat: "dd.mm.yy"
         })
            .on("change", function () {
               from.datepicker("option", "maxDate", getDate(this));
            });

      function getDate(element) {
         var date;
         try {
            date = $.datepicker.parseDate(dateFormat, element.value);
         } catch (error) {
            date = null;
         }

         return date;
      }
   }

   if ($(".timer").length > 0) {
      $(".timer").map(timer)
   }

   if ($(".tablePartners").length > 0) {
      $(".slideTitle").on("click", function () {
         if ($(this).hasClass('active')) {
            $(this).stop().removeClass('active').siblings('.slideContent').stop().slideUp();
         } else {
            $(this).parent('.slideBlock').siblings('.slideBlock').children('.slideTitle.active')
               .stop().removeClass('active').siblings('.slideContent').stop().slideUp();
            $(this).stop().addClass('active').siblings('.slideContent').stop().slideDown();
         }
      })
   }

   if ($(".modalsScroll").length > 0) {
      openMod();
   }

   if ($(".lkLeft").length > 0) {
      if ($(window).width() < 1200) {
         $(".lkLeft").click(function () {
            $(this).toggleClass("open")
         })
      }
   }

   if ($(".widget-preview").length > 0) {
      $(".messenger__switch").click(function () {
         e = $(this)
         e.toggleClass("active"),
            document.getElementById("messenger__block").classList.toggle("messenger-show"),
            document.getElementById("messenger__static").classList.toggle("messenger-hide"),
            document.getElementById("messenger__close").classList.toggle("messenger-show");

         let t = document.getElementsByClassName("messenger__pulsation");
         for (let e = 0; e < t.length; e++) t[e].classList.toggle("messenger-stop")
      })

   }

   if ($(".btnGood").length > 0) {
      $(".btnGood").click(function () {
         $(".cookiesBlock").addClass("closed")
      })
   }

   scrolllInit();
});

document.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      $("body").addClass("loading")
      setTimeout(() => {
         $(".loadingBl").addClass("hidden")
      }, 2000);
   }, 1000);
});

$(window).resize(function () {
   scrolllInit()
   if ($(window).width() < 1400) {
      removeClassSliderInvest()
   } else {
      addClassSliderInvest()
   }
});

function addClassSliderInvest() {

   if ($(window).width() >= 1400) {

      let items = $(".sliderInvest .item.slick-active")

      items.map(function (index) {
         let posItem = index + 1
         let centerItem = Math.ceil(items.length / 2)

         if (index == 0) {
            $(this).addClass("first").prev().addClass("extreme")
         }

         if (index == items.length - 1) {
            $(this).addClass("last").next().addClass("extreme")
         }

         if (posItem == centerItem) {
            $(this).addClass("centerItem")
            $(this).next().addClass("nextItem")
            $(this).prev().addClass("prevItem")
         }
      })

   }
}

function removeClassSliderInvest() {
   $(".sliderInvest .item").removeClass("centerItem nextItem prevItem extreme first last")
}

function dotsWithSliders(parent) {
   let width = 0;
   let margin = 0;
   let next = $(parent).find(".slick-next")
   let prev = $(parent).find(".slick-prev")
   let dots = $(parent).find(".slick-dots").children()
   for (let dot of dots) {
      width += dot.clientWidth + 10
   }
   margin = (width / 2) + 20
   next.css("margin-left", margin)
   prev.css("margin-left", -(margin + 10))
}

var m
var timer = function () {
   if ($(this).attr('data-now') != '' && $(this).attr('data-start') != '' && $(this).attr('data-end') != '') {
      var now = new Date($(this).attr('data-now')),
         startTime = new Date($(this).attr('data-start')),
         finishTime = new Date($(this).attr('data-end')),
         startMS = startTime.getTime(),
         finishMS = finishTime.getTime(),
         nowMS = now.getTime(),
         betweenMS = finishMS - startMS,
         lastMS = finishMS - nowMS,
         percent = lastMS * 100 / betweenMS,
         lastHour,
         lastMin,
         lastSec;
      percent = 100 - percent.toFixed();

      if ($(this).siblings(".valueInvest")) {
         $(this).siblings(".valueInvest").find("[class='val']").attr('data-pr', percent);
         $(this).siblings(".valueInvest").find("[class='val']").text(percent + ' %');

         var pr = $(this).siblings(".valueInvest").find("[class='val']").attr("data-pr")
         var prog = $(this).siblings(".valueInvest").find(".prog")
         var cubePr = ((16 / 100) * pr)
         cubePr = cubePr.toFixed();
         for (var i = 0; i < cubePr; i++) {
            prog.find(".cube").eq(i).addClass("open")
         }

      }
      if ($(this).siblings(".circleBl")) {
         $(this).siblings(".circleBl").find("input").attr('value', percent);
         $(this).siblings(".circleBl").find("input").val(percent).trigger('change');
      }

      m = setInterval(function () {
         nowMS = nowMS + 1000;
         lastMS = finishMS - nowMS;

         lastHour = Math.floor(lastMS / 1000 / 60 / 60)
         lastMin = Math.floor((lastMS - (lastHour * 1000 * 60 * 60)) / 1000 / 60)
         lastSec = Math.floor((lastMS - (lastHour * 1000 * 60 * 60) - (lastMin * 60 * 1000)) / 1000)

         lastHour = checkTime(lastHour);
         lastMin = checkTime(lastMin);
         lastSec = checkTime(lastSec);

         $(this).find('.hous').text(lastHour);
         $(this).find('.min').text(lastMin);
         $(this).find('.sec').text(lastSec);

         if (lastMS / 1000 < 0) {
            $(this).find('.hous').text('00');
            $(this).find('.min').text('00');
            $(this).find('.sec').text('00');
         }

         // if (lastMS / 1000 <= 1) {
         //     clearInterval(m)
         // }
      }.bind(this), 1000)
   }
}
var checkTime = function (i) {
   if (i < 10) {
      i = "0" + i;
   }
   return i;
}

var scrolllInit = function () {

   if ($(".helloyBlock").length > 0) {
      if ($(window).width() < 1900) {
         $(".helloyBlock .stateInfoWrap").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      } else {
         $(".helloyBlock .stateInfoWrap").mCustomScrollbar("destroy")
      }
   }

   if ($(".listWalletWrap").length > 0) {
      if ($(window).width() < 1900) {
         $(".listWalletWrap").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      }
      else {
         $(".listWalletWrap").mCustomScrollbar("destroy")
      }
   }

   if ($(".rangBl").length > 0) {
      if ($(window).width() < 1700) {
         $(".rangBl").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      }
      else {
         $(".rangBl").mCustomScrollbar("destroy")
      }
   }

   if ($(".refLvl").length > 0) {
      if ($(window).width() < 1700) {
         $(".refLvl").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      }
      else {
         $(".refLvl").mCustomScrollbar("destroy")
      }
   }


   if ($(".tableScroll").length > 0) {
      if ($(window).width() < 1600) {
         $(".tableScroll").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      }
      else {
         $(".tableScroll").mCustomScrollbar("destroy")
      }
   }

   if ($(".tablePartScroll").length > 0) {
      if ($(window).width() < 1440) {
         $(".tablePartScroll").mCustomScrollbar({
            axis: "x",
            scrollButtons: {
               enable: true
            }
         });
      }
      else {
         $(".tablePartScroll").mCustomScrollbar("destroy")
      }
   }
}

var flag = true;
function removeEl(el, level) {
   if (el.data('level') > level) {
      removeEl(el.next(), el.data('level'));
      el.remove();
   }
}

function clickRef(level, id) {
   if (flag) {
      flag = false;
      var link = $('#el' + id);
      if (link.parent().hasClass('active')) {
         link.parent().removeClass('active');
         removeEl($('#el' + id).next(), $('#el' + id).data('level'));
         flag = true;
      } else {
         link.parent().addClass('active');
         $.ajax({
            url: '/partner?level=' + level + '&id=' + id,
            cache: false,
            success: function (html) {
               if (html) {
                  $('#el' + id).next('.slideContent').html(html);
               }
               flag = true;
            }
         });

      }
   }
   return false;
}
