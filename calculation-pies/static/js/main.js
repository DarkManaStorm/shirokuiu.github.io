/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';
	
	// Select
	
	(function () {
	  var select = document.querySelectorAll('.calculation-select');
	  var selectStep = document.querySelector('.calculation__checkbox-number--step1');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var val = this.querySelector('.val-js');
	      var option = evt.target.closest('.option-js');
	
	      this.classList.toggle('calculation-select--close');
	
	      if (option) {
	        val.textContent = option.textContent;
	        selectStep.style.backgroundColor = '#37B84C';
	        selectStep.style.color = '#ffffff';
	      }
	    });
	  }
	})();
	
	// Checkbox
	(function () {
	  var check = document.querySelectorAll('.checkbox-js');
	  var checkStep = document.querySelector('.calculation__checkbox-number--step3');
	
	  for (var i = 0, len = check.length; i < len; i++) {
	    check[i].addEventListener('click', function (evt) {
	      var item = evt.target.closest('.checkbox-item-js');
	      var innerItem = evt.target.closest('.checkbox-item-inner-js');
	      var itemInput = this.querySelector('.checkbox-item-input-js');
	
	      if (item) {
	        if (!itemInput.checked) {
	          itemInput.setAttribute('checked', '');
	          this.classList.remove('calculation__fill-checkbox-wrap--close');
	          checkStep.classList.add('step3-checked');
	        } else {
	          itemInput.removeAttribute('checked', '');
	          this.classList.add('calculation__fill-checkbox-wrap--close');
	        }
	      }
	
	      if (innerItem) {
	        var innerItemInput = innerItem.querySelector('.checkbox-item-inner-input-js');
	        if (!innerItemInput.checked) {
	          innerItemInput.setAttribute('checked', '');
	        } else {
	          innerItemInput.removeAttribute('checked', '');
	        }
	      }
	    });
	  }
	})();
	
	// Table-Cart
	(function () {
	  var table = document.querySelector('.calculation__table');
	  var cart = document.querySelectorAll('.calculation__cart');
	  var select = document.querySelectorAll('.cart-select-js');
	  var fullPrice = document.querySelector('.calculation__table-result-price');
	  var fullCount = document.querySelector('.table-total-price-js ');
	
	  table.setAttribute('data-total-price', '0');
	  table.setAttribute('data-total-count', '0');
	
	  for (var i = 0, len = select.length; i < len; i++) {
	    select[i].addEventListener('click', function (evt) {
	      var val = this.querySelector('.calculation__cart-select-val');
	      var option = evt.target.closest('.calculation__cart-select-option');
	
	      this.classList.toggle('calculation__cart-select--close');
	
	      if (option) {
	        val.dataset.currentPrice = option.dataset.price;
	        this.dataset.currentPrice = val.dataset.currentPrice;
	        val.textContent = option.textContent;
	      }
	    });
	  }
	
	  for (var i = 0, len = cart.length; i < len; i++) {
	    var cartSelect = cart[i].querySelectorAll('.cart-select-js');
	    var cartPrice = cart[i].querySelectorAll('.calculation__cart-td-price');
	    var cartSum = cart[i].querySelectorAll('.calculation__cart-td-total-price');
	
	    cart[i].setAttribute('data-total-price', '0');
	    cart[i].setAttribute('data-total-count', '1');
	    cart[i].setAttribute('data-basic-price', '0');
	
	    for (var j = 0, jlen = cartPrice.length; j < jlen; j++) {
	      cart[i].dataset.totalPrice = cartSelect[j].dataset.currentPrice;
	      cart[i].dataset.basicPrice = cartSelect[j].dataset.currentPrice;
	      cartPrice[j].textContent = cartSelect[j].dataset.currentPrice;
	      cartSum[j].textContent = cart[i].dataset.totalPrice;
	    }
	
	    table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) + parseInt(cart[i].dataset.totalPrice, 10);
	    table.dataset.totalCount = parseInt(table.dataset.totalCount, 10) + parseInt(cart[i].dataset.totalCount, 10);
	
	    cart[i].addEventListener('click', function (evt) {
	      var minus = evt.target.closest('.calculation__incDec-button--minus');
	      var val = this.querySelectorAll('.calculation__incDec-val');
	      var sum = this.querySelectorAll('.calculation__cart-td-total-price');
	      var basicPrice = this.querySelectorAll('.calculation__cart-td-price');
	      var plus = evt.target.closest('.calculation__incDec-button--plus');
	      var remove = evt.target.closest('.calculation__cart-remove-button');
	      var itCartSelect = evt.target.closest('.cart-select-js');
	
	      table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) + parseInt(this.dataset.totalPrice, 10);
	
	      if (itCartSelect) {
	        this.dataset.totalPrice = itCartSelect.dataset.currentPrice;
	        this.dataset.basicPrice = itCartSelect.dataset.currentPrice;
	        for (var j = 0, jlen = val.length; j < jlen; j++) {
	          basicPrice[j].textContent = this.dataset.basicPrice;
	          sum[j].textContent = this.dataset.totalPrice;
	        }
	      }
	
	      if (minus) {
	        if (parseInt(this.dataset.totalCount, 10) > 1) {
	          for (var j = 0, jlen = val.length; j < jlen; j++) {
	            val[j].textContent = parseInt(val[j].textContent, 10) - 1;
	          }
	          this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) - parseInt(this.dataset.basicPrice, 10);
	          this.dataset.totalCount = val[0].textContent;
	          table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) - parseInt(this.dataset.basicPrice, 10);
	          table.dataset.totalCount = parseInt(table.dataset.totalCount, 10) - 1;
	          fullPrice.textContent = table.dataset.totalPrice;
	          fullCount.textContent = table.dataset.totalCount;
	          for (var j = 0, jlen = sum.length; j < jlen; j++) {
	            sum[j].textContent = this.dataset.totalPrice;
	          }
	        }
	      }
	
	      if (plus) {
	        for (var j = 0, jlen = val.length; j < jlen; j++) {
	          val[j].textContent = parseInt(val[j].textContent, 10) + 1;
	        }
	        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
	        this.dataset.totalCount = val[0].textContent;
	        table.dataset.totalPrice = parseInt(table.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
	        table.dataset.totalCount = parseInt(table.dataset.totalCount, 10) + 1;
	        fullPrice.textContent = table.dataset.totalPrice;
	        fullCount.textContent = table.dataset.totalCount;
	        for (var j = 0, jlen = sum.length; j < jlen; j++) {
	          sum[j].textContent = this.dataset.totalPrice;
	        }
	      }
	
	      if (remove) {
	        this.remove();
	      }
	    });
	  }
	
	  fullPrice.textContent = table.dataset.totalPrice;
	  fullCount.textContent = table.dataset.totalCount;
	})();
	
	// Tel
	(function () {
	  var step2 = document.querySelector('.calculation__checkbox-number--step2');
	  $(document).ready(function () {
	    $('.tel-js').mask("+0(000) 000-0000", { placeholder: "+7(_ _ _) _ _ _ - _ _ _ _" });
	
	    $("#ex13").slider({
	      ticks: [0, 100, 200, 300, 400],
	      ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
	      ticks_snap_bounds: 30
	    });
	
	    var myTrack = document.querySelector('.calculation__range-wrap');
	    var myTooltip = document.querySelector('.tooltip');
	
	    myTrack.addEventListener('mouseenter', function () {
	      myTooltip.style.opacity = '1';
	    });
	
	    myTrack.addEventListener('mousemove', function () {
	      if (parseInt(myTooltip.style.left, 10) >= 2) {
	        step2.style.backgroundColor = '#37B84C';
	        step2.style.color = '#ffffff';
	      }
	    });
	
	    myTrack.addEventListener('mouseleave', function () {
	      myTooltip.style.opacity = '0';
	    });
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDU5YzNjMDYwZWQwZGU0OTdjNWEiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdFN0ZXAiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ2YWwiLCJvcHRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2hlY2siLCJjaGVja1N0ZXAiLCJpdGVtIiwiaW5uZXJJdGVtIiwiaXRlbUlucHV0IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImFkZCIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVySXRlbUlucHV0IiwidGFibGUiLCJjYXJ0IiwiZnVsbFByaWNlIiwiZnVsbENvdW50IiwiZGF0YXNldCIsImN1cnJlbnRQcmljZSIsInByaWNlIiwiY2FydFNlbGVjdCIsImNhcnRQcmljZSIsImNhcnRTdW0iLCJqIiwiamxlbiIsInRvdGFsUHJpY2UiLCJiYXNpY1ByaWNlIiwicGFyc2VJbnQiLCJ0b3RhbENvdW50IiwibWludXMiLCJzdW0iLCJwbHVzIiwiaXRDYXJ0U2VsZWN0Iiwic3RlcDIiLCIkIiwicmVhZHkiLCJtYXNrIiwicGxhY2Vob2xkZXIiLCJzbGlkZXIiLCJ0aWNrcyIsInRpY2tzX2xhYmVscyIsInRpY2tzX3NuYXBfYm91bmRzIiwibXlUcmFjayIsIm15VG9vbHRpcCIsIm9wYWNpdHkiLCJsZWZ0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFD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LFNBQVNnQixVQUFVNUMsS0FBVixDQUFnQjhDLElBQXpCLEVBQStCLEVBQS9CLEtBQXNDLENBQTFDLEVBQTZDO0FBQzNDWixlQUFNbEMsS0FBTixDQUFZQyxlQUFaLEdBQThCLFNBQTlCO0FBQ0FpQyxlQUFNbEMsS0FBTixDQUFZRSxLQUFaLEdBQW9CLFNBQXBCO0FBQ0Q7QUFDRixNQUxEOztBQU9BeUMsYUFBUXBELGdCQUFSLENBQXlCLFlBQXpCLEVBQXVDLFlBQVk7QUFDakRxRCxpQkFBVTVDLEtBQVYsQ0FBZ0I2QyxPQUFoQixHQUEwQixHQUExQjtBQUNELE1BRkQ7QUFHRCxJQTNCRDtBQTRCRCxFQTlCRCxJIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkNTljM2MwNjBlZDBkZTQ5N2M1YSIsIid1c2Ugc3RyaWN0JztcblxuLy8gU2VsZWN0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uLXNlbGVjdCcpO1xuICB2YXIgc2VsZWN0U3RlcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2hlY2tib3gtbnVtYmVyLS1zdGVwMScpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNlbGVjdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy52YWwtanMnKTtcbiAgICAgIHZhciBvcHRpb24gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5vcHRpb24tanMnKTtcbiAgICAgIFxuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdjYWxjdWxhdGlvbi1zZWxlY3QtLWNsb3NlJyk7XG4gICAgICBcbiAgICAgIGlmIChvcHRpb24pIHtcbiAgICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50O1xuICAgICAgICBzZWxlY3RTdGVwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzdCODRDJztcbiAgICAgICAgc2VsZWN0U3RlcC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gQ2hlY2tib3hcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBjaGVjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveC1qcycpO1xuICB2YXIgY2hlY2tTdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX19jaGVja2JveC1udW1iZXItLXN0ZXAzJyk7XG4gIFxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2hlY2subGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjaGVja1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBpdGVtID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2hlY2tib3gtaXRlbS1qcycpO1xuICAgICAgdmFyIGlubmVySXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrYm94LWl0ZW0taW5uZXItanMnKTtcbiAgICAgIHZhciBpdGVtSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1pdGVtLWlucHV0LWpzJyk7XG4gICAgICBcbiAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgIGlmICghKGl0ZW1JbnB1dC5jaGVja2VkKSkge1xuICAgICAgICAgIGl0ZW1JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjYWxjdWxhdGlvbl9fZmlsbC1jaGVja2JveC13cmFwLS1jbG9zZScpO1xuICAgICAgICAgIGNoZWNrU3RlcC5jbGFzc0xpc3QuYWRkKCdzdGVwMy1jaGVja2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0aW9uX19maWxsLWNoZWNrYm94LXdyYXAtLWNsb3NlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKGlubmVySXRlbSkge1xuICAgICAgICB2YXIgaW5uZXJJdGVtSW5wdXQgPSBpbm5lckl0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrYm94LWl0ZW0taW5uZXItaW5wdXQtanMnKTsgXG4gICAgICAgIGlmICghKGlubmVySXRlbUlucHV0LmNoZWNrZWQpKSB7XG4gICAgICAgICAgaW5uZXJJdGVtSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlubmVySXRlbUlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KSgpO1xuXG4vLyBUYWJsZS1DYXJ0XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3RhYmxlJyk7XG4gIHZhciBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX19jYXJ0Jyk7XG4gIHZhciBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1zZWxlY3QtanMnKTtcbiAgdmFyIGZ1bGxQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fdGFibGUtcmVzdWx0LXByaWNlJyk7XG4gIHZhciBmdWxsQ291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFibGUtdG90YWwtcHJpY2UtanMgJyk7XG4gIFxuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtcHJpY2UnLCAnMCcpO1xuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtY291bnQnLCAnMCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNlbGVjdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC1zZWxlY3QtdmFsJyk7XG4gICAgICB2YXIgb3B0aW9uID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2NhcnQtc2VsZWN0LW9wdGlvbicpO1xuICAgICAgXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGN1bGF0aW9uX19jYXJ0LXNlbGVjdC0tY2xvc2UnKTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB2YWwuZGF0YXNldC5jdXJyZW50UHJpY2UgPSBvcHRpb24uZGF0YXNldC5wcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IHZhbC5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJ0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNhcnRTZWxlY3QgPSBjYXJ0W2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LXNlbGVjdC1qcycpO1xuICAgIHZhciBjYXJ0UHJpY2UgPSBjYXJ0W2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC1wcmljZScpO1xuICAgIHZhciBjYXJ0U3VtID0gY2FydFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKTtcbiAgICBcbiAgICBjYXJ0W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICcwJyk7XG4gICAgY2FydFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtY291bnQnLCAnMScpO1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWJhc2ljLXByaWNlJywgJzAnKTtcbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IGNhcnRQcmljZS5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgIGNhcnRbaV0uZGF0YXNldC50b3RhbFByaWNlID0gY2FydFNlbGVjdFtqXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgIGNhcnRbaV0uZGF0YXNldC5iYXNpY1ByaWNlID0gY2FydFNlbGVjdFtqXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgIGNhcnRQcmljZVtqXS50ZXh0Q29udGVudCA9IGNhcnRTZWxlY3Rbal0uZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICBjYXJ0U3VtW2pdLnRleHRDb250ZW50ID0gY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQoY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKTtcbiAgICB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQsIDEwKSArIHBhcnNlSW50KGNhcnRbaV0uZGF0YXNldC50b3RhbENvdW50LCAxMCk7XG4gICAgXG4gICAgY2FydFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBtaW51cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtYnV0dG9uLS1taW51cycpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtdmFsJyk7XG4gICAgICB2YXIgc3VtID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKTtcbiAgICAgIHZhciBiYXNpY1ByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtcHJpY2UnKTtcbiAgICAgIHZhciBwbHVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2luY0RlYy1idXR0b24tLXBsdXMnKTtcbiAgICAgIHZhciByZW1vdmUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9fY2FydC1yZW1vdmUtYnV0dG9uJyk7XG4gICAgICB2YXIgaXRDYXJ0U2VsZWN0ID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FydC1zZWxlY3QtanMnKTtcbiAgICAgIFxuICAgICAgdGFibGUuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgKyBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApO1xuICAgICAgXG4gICAgICBpZiAoaXRDYXJ0U2VsZWN0KSB7XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gaXRDYXJ0U2VsZWN0LmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgICAgICB0aGlzLmRhdGFzZXQuYmFzaWNQcmljZSA9IGl0Q2FydFNlbGVjdC5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSB2YWwubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgYmFzaWNQcmljZVtqXS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlO1xuICAgICAgICAgIHN1bVtqXS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChtaW51cykge1xuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsQ291bnQsIDEwKSA+IDEpIHtcbiAgICAgICAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IHZhbC5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgICAgICAgIHZhbFtqXS50ZXh0Q29udGVudCA9IHBhcnNlSW50KHZhbFtqXS50ZXh0Q29udGVudCwgMTApIC0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApIC0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LmJhc2ljUHJpY2UsIDEwKTtcbiAgICAgICAgICB0aGlzLmRhdGFzZXQudG90YWxDb3VudCA9IHZhbFswXS50ZXh0Q29udGVudDtcbiAgICAgICAgICB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgICAgdGFibGUuZGF0YXNldC50b3RhbENvdW50ID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbENvdW50LCAxMCkgLSAxO1xuICAgICAgICAgIGZ1bGxQcmljZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgICBmdWxsQ291bnQudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQ7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSBzdW0ubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgICBzdW1bal0udGV4dENvbnRlbnQgPSB0aGlzLmRhdGFzZXQudG90YWxQcmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHBsdXMpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSB2YWwubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgdmFsW2pdLnRleHRDb250ZW50ID0gcGFyc2VJbnQodmFsW2pdLnRleHRDb250ZW50LCAxMCkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbENvdW50ID0gdmFsWzBdLnRleHRDb250ZW50O1xuICAgICAgICB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSArIHBhcnNlSW50KHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCwgMTApICsgMTtcbiAgICAgICAgZnVsbFByaWNlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICBmdWxsQ291bnQudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQ7XG4gICAgICAgIGZvciAodmFyIGogPSAwLCBqbGVuID0gc3VtLmxlbmd0aDsgaiA8IGpsZW47IGorKykge1xuICAgICAgICAgIHN1bVtqXS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBcbiAgZnVsbFByaWNlLnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbFByaWNlO1xuICBmdWxsQ291bnQudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQ7XG59KSgpO1xuXG4vLyBUZWxcbihmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGVwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2hlY2tib3gtbnVtYmVyLS1zdGVwMicpO1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy50ZWwtanMnKS5tYXNrKFwiKzAoMDAwKSAwMDAtMDAwMFwiLCB7cGxhY2Vob2xkZXI6IFwiKzcoXyBfIF8pIF8gXyBfIC0gXyBfIF8gX1wifSk7XG4gICAgXG4gICAgJChcIiNleDEzXCIpLnNsaWRlcih7XG4gICAgICB0aWNrczogWzAsIDEwMCwgMjAwLCAzMDAsIDQwMF0sXG4gICAgICB0aWNrc19sYWJlbHM6IFsnJDAnLCAnJDEwMCcsICckMjAwJywgJyQzMDAnLCAnJDQwMCddLFxuICAgICAgdGlja3Nfc25hcF9ib3VuZHM6IDMwXG4gICAgfSk7XG4gICAgXG4gICAgdmFyIG15VHJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3JhbmdlLXdyYXAnKTtcbiAgICB2YXIgbXlUb29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2x0aXAnKTtcbiAgICBcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBteVRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9KTtcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYXJzZUludChteVRvb2x0aXAuc3R5bGUubGVmdCwgMTApID49IDIpIHtcbiAgICAgICAgc3RlcDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzN0I4NEMnO1xuICAgICAgICBzdGVwMi5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBteVRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==