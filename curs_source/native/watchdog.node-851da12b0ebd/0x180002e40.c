
/* Address: 0x180002e40; Evidence: ev_b16ed34b0fca68c2a7f2a6e26d4fab03dec43f29b2d4bdb020721e4cd27c5c80 */

/* Library Function - Single Match
    _CreateFrameInfo
   
   Libraries: Visual Studio 2015 Release, Visual Studio 2017 Release, Visual Studio 2019 Release */

undefined8 * _CreateFrameInfo(undefined8 *param_1,undefined8 param_2)

{
  longlong lVar1;
  undefined8 uVar2;
  
  *param_1 = param_2;
  lVar1 = FUN_1800027f8();
  if (param_1 < *(undefined8 **)(lVar1 + 0x58)) {
    lVar1 = FUN_1800027f8();
    uVar2 = *(undefined8 *)(lVar1 + 0x58);
  }
  else {
    uVar2 = 0;
  }
  param_1[1] = uVar2;
  lVar1 = FUN_1800027f8();
  *(undefined8 **)(lVar1 + 0x58) = param_1;
  return param_1;
}

