
/* Address: 0x180003eb0; Evidence: ev_6a49368b2dd34d403030de3458ccfc373adafc6e47a909967815725cfae5c738 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_180003868();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_180003868();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_180003868();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}

