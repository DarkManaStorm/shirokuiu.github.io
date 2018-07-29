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
	  var step4 = document.querySelector('.calculation__table-step-number--4');
	
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
	
	        step4.style.backgroundColor = '#37B84C';
	        step4.style.color = '#ffffff';
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
	
	          step4.style.backgroundColor = '#37B84C';
	          step4.style.color = '#ffffff';
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
	
	        step4.style.backgroundColor = '#37B84C';
	        step4.style.color = '#ffffff';
	      }
	
	      if (remove) {
	        this.remove();
	
	        step4.style.backgroundColor = '#37B84C';
	        step4.style.color = '#ffffff';
	      }
	    });
	  }
	
	  fullPrice.textContent = table.dataset.totalPrice;
	  fullCount.textContent = table.dataset.totalCount;
	})();
	
	// Tel
	(function () {
	  var step2 = document.querySelector('.calculation__checkbox-number--step2');
	  var step5 = document.querySelector('.calculation__table-step-number--5');
	  var dataInput = document.querySelectorAll('.calculation__user-data-input');
	
	  for (var i = 0, len = dataInput.length; i < len; i++) {
	    dataInput[i].addEventListener('input', function () {
	      step5.style.backgroundColor = '#37B84C';
	      step5.style.color = '#ffffff';
	    });
	  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQ5NmI5ZTkyNTc5MWI3ZGVkODMiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbInNlbGVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdFN0ZXAiLCJxdWVyeVNlbGVjdG9yIiwiaSIsImxlbiIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJ2YWwiLCJvcHRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiY2hlY2siLCJjaGVja1N0ZXAiLCJpdGVtIiwiaW5uZXJJdGVtIiwiaXRlbUlucHV0IiwiY2hlY2tlZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsImFkZCIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVySXRlbUlucHV0IiwidGFibGUiLCJjYXJ0IiwiZnVsbFByaWNlIiwiZnVsbENvdW50Iiwic3RlcDQiLCJkYXRhc2V0IiwiY3VycmVudFByaWNlIiwicHJpY2UiLCJjYXJ0U2VsZWN0IiwiY2FydFByaWNlIiwiY2FydFN1bSIsImoiLCJqbGVuIiwidG90YWxQcmljZSIsImJhc2ljUHJpY2UiLCJwYXJzZUludCIsInRvdGFsQ291bnQiLCJtaW51cyIsInN1bSIsInBsdXMiLCJpdENhcnRTZWxlY3QiLCJzdGVwMiIsInN0ZXA1IiwiZGF0YUlucHV0IiwiJCIsInJlYWR5IiwibWFzayIsInBsYWNlaG9sZGVyIiwic2xpZGVyIiwidGlja3MiLCJ0aWNrc19sYWJlbHMiLCJ0aWNrc19zbmFwX2JvdW5kcyIsIm15VHJhY2siLCJteVRvb2x0aXAiLCJvcGFjaXR5IiwibGVmdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVC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QixTQUFwQjtBQUNEO0FBQ0YsTUFMRDs7QUFPQTRDLGFBQVF2RCxnQkFBUixDQUF5QixZQUF6QixFQUF1QyxZQUFZO0FBQ2pEd0QsaUJBQVUvQyxLQUFWLENBQWdCZ0QsT0FBaEIsR0FBMEIsR0FBMUI7QUFDRCxNQUZEO0FBR0QsSUEzQkQ7QUE0QkQsRUF2Q0QsSSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9zdGF0aWMvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQ5NmI5ZTkyNTc5MWI3ZGVkODMiLCIndXNlIHN0cmljdCc7XG5cbi8vIFNlbGVjdFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbi1zZWxlY3QnKTtcbiAgdmFyIHNlbGVjdFN0ZXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NoZWNrYm94LW51bWJlci0tc3RlcDEnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxlY3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzZWxlY3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgdmFsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcudmFsLWpzJyk7XG4gICAgICB2YXIgb3B0aW9uID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcub3B0aW9uLWpzJyk7XG4gICAgICBcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnY2FsY3VsYXRpb24tc2VsZWN0LS1jbG9zZScpO1xuICAgICAgXG4gICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgIHZhbC50ZXh0Q29udGVudCA9IG9wdGlvbi50ZXh0Q29udGVudDtcbiAgICAgICAgc2VsZWN0U3RlcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM3Qjg0Qyc7XG4gICAgICAgIHNlbGVjdFN0ZXAuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pKCk7XG5cbi8vIENoZWNrYm94XG4oZnVuY3Rpb24gKCkge1xuICB2YXIgY2hlY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gtanMnKTtcbiAgdmFyIGNoZWNrU3RlcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2hlY2tib3gtbnVtYmVyLS1zdGVwMycpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoZWNrLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY2hlY2tbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICB2YXIgaXRlbSA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNoZWNrYm94LWl0ZW0tanMnKTtcbiAgICAgIHZhciBpbm5lckl0ZW0gPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jaGVja2JveC1pdGVtLWlubmVyLWpzJyk7XG4gICAgICB2YXIgaXRlbUlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gtaXRlbS1pbnB1dC1qcycpO1xuICAgICAgXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICBpZiAoIShpdGVtSW5wdXQuY2hlY2tlZCkpIHtcbiAgICAgICAgICBpdGVtSW5wdXQuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2FsY3VsYXRpb25fX2ZpbGwtY2hlY2tib3gtd3JhcC0tY2xvc2UnKTtcbiAgICAgICAgICBjaGVja1N0ZXAuY2xhc3NMaXN0LmFkZCgnc3RlcDMtY2hlY2tlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjYWxjdWxhdGlvbl9fZmlsbC1jaGVja2JveC13cmFwLS1jbG9zZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChpbm5lckl0ZW0pIHtcbiAgICAgICAgdmFyIGlubmVySXRlbUlucHV0ID0gaW5uZXJJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveC1pdGVtLWlubmVyLWlucHV0LWpzJyk7IFxuICAgICAgICBpZiAoIShpbm5lckl0ZW1JbnB1dC5jaGVja2VkKSkge1xuICAgICAgICAgIGlubmVySXRlbUlucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbm5lckl0ZW1JbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSkoKTtcblxuLy8gVGFibGUtQ2FydFxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX190YWJsZScpO1xuICB2YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbl9fY2FydCcpO1xuICB2YXIgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcnQtc2VsZWN0LWpzJyk7XG4gIHZhciBmdWxsUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3RhYmxlLXJlc3VsdC1wcmljZScpO1xuICB2YXIgZnVsbENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYmxlLXRvdGFsLXByaWNlLWpzICcpO1xuICB2YXIgc3RlcDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3RhYmxlLXN0ZXAtbnVtYmVyLS00Jyk7XG4gIFxuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtcHJpY2UnLCAnMCcpO1xuICB0YWJsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtY291bnQnLCAnMCcpO1xuICBcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlbGVjdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHNlbGVjdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdGlvbl9fY2FydC1zZWxlY3QtdmFsJyk7XG4gICAgICB2YXIgb3B0aW9uID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2NhcnQtc2VsZWN0LW9wdGlvbicpO1xuICAgICAgXG4gICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NhbGN1bGF0aW9uX19jYXJ0LXNlbGVjdC0tY2xvc2UnKTtcbiAgICAgIFxuICAgICAgaWYgKG9wdGlvbikge1xuICAgICAgICB2YWwuZGF0YXNldC5jdXJyZW50UHJpY2UgPSBvcHRpb24uZGF0YXNldC5wcmljZTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LmN1cnJlbnRQcmljZSA9IHZhbC5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgdmFsLnRleHRDb250ZW50ID0gb3B0aW9uLnRleHRDb250ZW50XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYXJ0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNhcnRTZWxlY3QgPSBjYXJ0W2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LXNlbGVjdC1qcycpO1xuICAgIHZhciBjYXJ0UHJpY2UgPSBjYXJ0W2ldLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYWxjdWxhdGlvbl9fY2FydC10ZC1wcmljZScpO1xuICAgIHZhciBjYXJ0U3VtID0gY2FydFtpXS5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKTtcbiAgICBcbiAgICBjYXJ0W2ldLnNldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1wcmljZScsICcwJyk7XG4gICAgY2FydFtpXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtY291bnQnLCAnMScpO1xuICAgIGNhcnRbaV0uc2V0QXR0cmlidXRlKCdkYXRhLWJhc2ljLXByaWNlJywgJzAnKTtcbiAgICBcbiAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IGNhcnRQcmljZS5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgIGNhcnRbaV0uZGF0YXNldC50b3RhbFByaWNlID0gY2FydFNlbGVjdFtqXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgIGNhcnRbaV0uZGF0YXNldC5iYXNpY1ByaWNlID0gY2FydFNlbGVjdFtqXS5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgIGNhcnRQcmljZVtqXS50ZXh0Q29udGVudCA9IGNhcnRTZWxlY3Rbal0uZGF0YXNldC5jdXJyZW50UHJpY2U7XG4gICAgICBjYXJ0U3VtW2pdLnRleHRDb250ZW50ID0gY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgfVxuICAgIFxuICAgIHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQoY2FydFtpXS5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKTtcbiAgICB0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQgPSBwYXJzZUludCh0YWJsZS5kYXRhc2V0LnRvdGFsQ291bnQsIDEwKSArIHBhcnNlSW50KGNhcnRbaV0uZGF0YXNldC50b3RhbENvdW50LCAxMCk7XG4gICAgXG4gICAgY2FydFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIHZhciBtaW51cyA9IGV2dC50YXJnZXQuY2xvc2VzdCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtYnV0dG9uLS1taW51cycpO1xuICAgICAgdmFyIHZhbCA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX19pbmNEZWMtdmFsJyk7XG4gICAgICB2YXIgc3VtID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtdG90YWwtcHJpY2UnKTtcbiAgICAgIHZhciBiYXNpY1ByaWNlID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcuY2FsY3VsYXRpb25fX2NhcnQtdGQtcHJpY2UnKTtcbiAgICAgIHZhciBwbHVzID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FsY3VsYXRpb25fX2luY0RlYy1idXR0b24tLXBsdXMnKTtcbiAgICAgIHZhciByZW1vdmUgPSBldnQudGFyZ2V0LmNsb3Nlc3QoJy5jYWxjdWxhdGlvbl9fY2FydC1yZW1vdmUtYnV0dG9uJyk7XG4gICAgICB2YXIgaXRDYXJ0U2VsZWN0ID0gZXZ0LnRhcmdldC5jbG9zZXN0KCcuY2FydC1zZWxlY3QtanMnKTtcbiAgICAgIFxuICAgICAgdGFibGUuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgKyBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApO1xuICAgICAgXG4gICAgICBpZiAoaXRDYXJ0U2VsZWN0KSB7XG4gICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gaXRDYXJ0U2VsZWN0LmRhdGFzZXQuY3VycmVudFByaWNlO1xuICAgICAgICB0aGlzLmRhdGFzZXQuYmFzaWNQcmljZSA9IGl0Q2FydFNlbGVjdC5kYXRhc2V0LmN1cnJlbnRQcmljZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSB2YWwubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgYmFzaWNQcmljZVtqXS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlO1xuICAgICAgICAgIHN1bVtqXS50ZXh0Q29udGVudCA9IHRoaXMuZGF0YXNldC50b3RhbFByaWNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBzdGVwNC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM3Qjg0Qyc7XG4gICAgICAgIHN0ZXA0LnN0eWxlLmNvbG9yID0gJyNmZmZmZmYnO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAobWludXMpIHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMuZGF0YXNldC50b3RhbENvdW50LCAxMCkgPiAxKSB7XG4gICAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSB2YWwubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgICB2YWxbal0udGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWxbal0udGV4dENvbnRlbnQsIDEwKSAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UsIDEwKSAtIHBhcnNlSW50KHRoaXMuZGF0YXNldC5iYXNpY1ByaWNlLCAxMCk7XG4gICAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsQ291bnQgPSB2YWxbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgdGFibGUuZGF0YXNldC50b3RhbFByaWNlID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbFByaWNlLCAxMCkgLSBwYXJzZUludCh0aGlzLmRhdGFzZXQuYmFzaWNQcmljZSwgMTApO1xuICAgICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxDb3VudCwgMTApIC0gMTtcbiAgICAgICAgICBmdWxsUHJpY2UudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgZnVsbENvdW50LnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbENvdW50O1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBqbGVuID0gc3VtLmxlbmd0aDsgaiA8IGpsZW47IGorKykge1xuICAgICAgICAgICAgc3VtW2pdLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIHN0ZXA0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzdCODRDJztcbiAgICAgICAgICBzdGVwNC5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAocGx1cykge1xuICAgICAgICBmb3IgKHZhciBqID0gMCwgamxlbiA9IHZhbC5sZW5ndGg7IGogPCBqbGVuOyBqKyspIHtcbiAgICAgICAgICB2YWxbal0udGV4dENvbnRlbnQgPSBwYXJzZUludCh2YWxbal0udGV4dENvbnRlbnQsIDEwKSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2UgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQodGhpcy5kYXRhc2V0LmJhc2ljUHJpY2UsIDEwKTtcbiAgICAgICAgdGhpcy5kYXRhc2V0LnRvdGFsQ291bnQgPSB2YWxbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSA9IHBhcnNlSW50KHRhYmxlLmRhdGFzZXQudG90YWxQcmljZSwgMTApICsgcGFyc2VJbnQodGhpcy5kYXRhc2V0LmJhc2ljUHJpY2UsIDEwKTtcbiAgICAgICAgdGFibGUuZGF0YXNldC50b3RhbENvdW50ID0gcGFyc2VJbnQodGFibGUuZGF0YXNldC50b3RhbENvdW50LCAxMCkgKyAxO1xuICAgICAgICBmdWxsUHJpY2UudGV4dENvbnRlbnQgPSB0YWJsZS5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgIGZ1bGxDb3VudC50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQudG90YWxDb3VudDtcbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIGpsZW4gPSBzdW0ubGVuZ3RoOyBqIDwgamxlbjsgaisrKSB7XG4gICAgICAgICAgc3VtW2pdLnRleHRDb250ZW50ID0gdGhpcy5kYXRhc2V0LnRvdGFsUHJpY2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHN0ZXA0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzdCODRDJztcbiAgICAgICAgc3RlcDQuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIHN0ZXA0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzdCODRDJztcbiAgICAgICAgc3RlcDQuc3R5bGUuY29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgXG4gIGZ1bGxQcmljZS50ZXh0Q29udGVudCA9IHRhYmxlLmRhdGFzZXQudG90YWxQcmljZTtcbiAgZnVsbENvdW50LnRleHRDb250ZW50ID0gdGFibGUuZGF0YXNldC50b3RhbENvdW50O1xufSkoKTtcblxuLy8gVGVsXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc3RlcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX2NoZWNrYm94LW51bWJlci0tc3RlcDInKTtcbiAgdmFyIHN0ZXA1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0aW9uX190YWJsZS1zdGVwLW51bWJlci0tNScpO1xuICB2YXIgZGF0YUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbGN1bGF0aW9uX191c2VyLWRhdGEtaW5wdXQnKTtcbiAgXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhSW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBkYXRhSW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzdGVwNS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzM3Qjg0Qyc7XG4gICAgICBzdGVwNS5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcbiAgICB9KTtcbiAgfVxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICQoJy50ZWwtanMnKS5tYXNrKFwiKzAoMDAwKSAwMDAtMDAwMFwiLCB7cGxhY2Vob2xkZXI6IFwiKzcoXyBfIF8pIF8gXyBfIC0gXyBfIF8gX1wifSk7XG4gICAgXG4gICAgJChcIiNleDEzXCIpLnNsaWRlcih7XG4gICAgICB0aWNrczogWzAsIDEwMCwgMjAwLCAzMDAsIDQwMF0sXG4gICAgICB0aWNrc19sYWJlbHM6IFsnJDAnLCAnJDEwMCcsICckMjAwJywgJyQzMDAnLCAnJDQwMCddLFxuICAgICAgdGlja3Nfc25hcF9ib3VuZHM6IDMwXG4gICAgfSk7XG4gICAgXG4gICAgdmFyIG15VHJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRpb25fX3JhbmdlLXdyYXAnKTtcbiAgICB2YXIgbXlUb29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvb2x0aXAnKTtcbiAgICBcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBteVRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICB9KTtcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwYXJzZUludChteVRvb2x0aXAuc3R5bGUubGVmdCwgMTApID49IDIpIHtcbiAgICAgICAgc3RlcDIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzN0I4NEMnO1xuICAgICAgICBzdGVwMi5zdHlsZS5jb2xvciA9ICcjZmZmZmZmJztcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBteVRyYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBteVRvb2x0aXAuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==