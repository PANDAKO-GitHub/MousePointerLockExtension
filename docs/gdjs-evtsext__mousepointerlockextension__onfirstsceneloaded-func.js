gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded = {};

gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.userFunc0x6b4160 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let canvas = document.getElementsByTagName("canvas")[0];
gdjs._MousePointerLockExtension = {};
gdjs._MousePointerLockExtension.movement = {x:0,y:0};

canvas.addEventListener("mousemove", (e)=>{
    gdjs._MousePointerLockExtension.movement.x = e.movementX;
    gdjs._MousePointerLockExtension.movement.y = e.movementY;
}, false);
};
gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.userFunc0x6b4160(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerFirstRuntimeSceneLoadedCallback(function(runtimeScene) {
    gdjs.evtsExt__MousePointerLockExtension__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
});
