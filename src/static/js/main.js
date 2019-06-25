(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNotif = void 0;

var handleNotif = function handleNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " : ").concat(message));
};

exports.handleNotif = handleNotif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTm90aWYiLCJkYXRhIiwibWVzc2FnZSIsIm5pY2tuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUFDLElBQUksRUFBSTtBQUFBLE1BQ3pCQyxPQUR5QixHQUNIRCxJQURHLENBQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxRQURnQixHQUNIRixJQURHLENBQ2hCRSxRQURnQjtBQUVqQ0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLFdBQWVGLFFBQWYsZ0JBQTZCRCxPQUE3QjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlTm90aWYgPSBkYXRhID0+IHtcclxuICBjb25zdCB7IG1lc3NhZ2UsIG5pY2tuYW1lIH0gPSBkYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfSA6ICR7bWVzc2FnZX1gKTtcclxufTtcclxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

var socket = io("/");

var sendMessage = function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You: ".concat(message));
};

var setNickname = function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
};

socket.on("messageNotif", _chat.handleNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWRmZjkyYTUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU5vdGlmIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsT0FBTyxFQUFJO0FBQzdCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsZ0JBQW9CSCxPQUFwQjtBQUNELENBSEQ7O0FBS0EsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsUUFBUSxFQUFJO0FBQzlCUixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxhQUFaLEVBQTJCO0FBQUVJLElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUEzQjtBQUNELENBRkQ7O0FBSUFSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLGlCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5vdGlmIH0gZnJvbSBcIi4vY2hhdFwiO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG5cclxuY29uc3Qgc2VuZE1lc3NhZ2UgPSBtZXNzYWdlID0+IHtcclxuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xyXG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcclxufTtcclxuXHJcbmNvbnN0IHNldE5pY2tuYW1lID0gbmlja25hbWUgPT4ge1xyXG4gIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwgeyBuaWNrbmFtZSB9KTtcclxufTtcclxuXHJcbnNvY2tldC5vbihcIm1lc3NhZ2VOb3RpZlwiLCBoYW5kbGVOb3RpZik7XHJcbiJdfQ==
},{"./chat":1}]},{},[2])