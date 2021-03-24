gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents = {};

gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.userFunc0x6ec9b8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._MousePointerLockExtension.movement = {x:0,y:0};
};
gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.userFunc0x6ec9b8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerRuntimeScenePostEventsCallback(function(runtimeScene) {
    gdjs.evtsExt__MousePointerLockExtension__onScenePostEvents.func(runtimeScene, runtimeScene);
});
