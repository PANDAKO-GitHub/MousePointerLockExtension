gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock = {};

gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.conditionTrue_0 = {val:false};
gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.userFunc0x72a428 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let canvas = document.getElementsByTagName("canvas")[0];
canvas.requestPointerLock();
};
gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.userFunc0x72a428(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

