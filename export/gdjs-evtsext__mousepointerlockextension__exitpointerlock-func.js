gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock = {};

gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.conditionTrue_0 = {val:false};
gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.userFunc0x725cc8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
document.exitPointerLock();
};
gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.userFunc0x725cc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

