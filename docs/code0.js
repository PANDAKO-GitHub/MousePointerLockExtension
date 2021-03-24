gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDWheelObjects1= [];
gdjs.New_32sceneCode.GDWheelObjects2= [];
gdjs.New_32sceneCode.GDConsoleObjects1= [];
gdjs.New_32sceneCode.GDConsoleObjects2= [];
gdjs.New_32sceneCode.GDHelpObjects1= [];
gdjs.New_32sceneCode.GDHelpObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWheelObjects1Objects = Hashtable.newFrom({"Wheel": gdjs.New_32sceneCode.GDWheelObjects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Console"), gdjs.New_32sceneCode.GDConsoleObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDConsoleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDConsoleObjects1[i].setString("MovementX : " + gdjs.evtTools.common.toString(gdjs.evtsExt__MousePointerLockExtension__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + "\nMovementY : " + gdjs.evtTools.common.toString(gdjs.evtsExt__MousePointerLockExtension__MovementY.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + "\n---\nMouseX : " + gdjs.evtTools.common.toString(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)) + "\nMouseY : " + gdjs.evtTools.common.toString(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)));
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtsExt__MousePointerLockExtension__isPointerLocked.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Console"), gdjs.New_32sceneCode.GDConsoleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wheel"), gdjs.New_32sceneCode.GDWheelObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDConsoleObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDConsoleObjects1[i].setString(gdjs.New_32sceneCode.GDConsoleObjects1[i].getString() + (gdjs.evtTools.string.newLine() + "---\nLocked!"));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDWheelObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDWheelObjects1[i].rotate(gdjs.evtsExt__MousePointerLockExtension__MovementX.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 10, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wheel"), gdjs.New_32sceneCode.GDWheelObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDWheelObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__MousePointerLockExtension__RequestPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__MousePointerLockExtension__ExitPointerLock.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDWheelObjects1.length = 0;
gdjs.New_32sceneCode.GDWheelObjects2.length = 0;
gdjs.New_32sceneCode.GDConsoleObjects1.length = 0;
gdjs.New_32sceneCode.GDConsoleObjects2.length = 0;
gdjs.New_32sceneCode.GDHelpObjects1.length = 0;
gdjs.New_32sceneCode.GDHelpObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
