goog.provide("app");
goog.require("sample.AppController");

/**
 * @type {angular.Module}
 */
var app = angular.module("app", ["ngMaterial"])
  .controller("AppController", sample.AppController);