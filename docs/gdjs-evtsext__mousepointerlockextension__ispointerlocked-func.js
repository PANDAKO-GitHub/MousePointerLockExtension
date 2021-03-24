gdjs.evtsExt__MousePointerLockExtension__isPointerLocked = {};

gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.conditionTrue_0 = {val:false};
gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.userFunc0x6e4000 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = document.pointerLockElement ? true : false;
};
gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.userFunc0x6e4000(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

