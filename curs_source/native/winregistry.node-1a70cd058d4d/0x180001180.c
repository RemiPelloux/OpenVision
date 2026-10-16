
/* Address: 0x180001180; Evidence: ev_29954e4a7a73a830008d034ddb2ef86ca0d5e79fa60e9fb79522a1f74c8095f0 */

undefined8 FUN_180001180(longlong *param_1)

{
  ulonglong uVar1;
  int iVar2;
  longlong *plVar3;
  longlong lVar4;
  longlong lVar5;
  
  uVar1 = param_1[3];
  lVar5 = param_1[2];
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x11) {
    lVar4 = *plVar3 + -0x5255435f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x4553555f544e4552, lVar4 == 0)) {
      lVar4 = (ulonglong)*(byte *)(plVar3 + 2) - 0x52;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000001;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x12) {
    lVar4 = *plVar3 + -0x434f4c5f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x494843414d5f4c41, lVar4 == 0)) {
      lVar4 = (ulonglong)*(ushort *)(plVar3 + 2) - 0x454e;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000002;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 0x11) {
    lVar4 = *plVar3 + -0x414c435f59454b48;
    if ((lVar4 == 0) && (lVar4 = plVar3[1] + -0x4f4f525f53455353, lVar4 == 0)) {
      lVar4 = (ulonglong)*(byte *)(plVar3 + 2) - 0x54;
    }
    if (lVar4 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000000;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (lVar5 == 10) {
    lVar5 = *plVar3 + -0x4553555f59454b48;
    if (lVar5 == 0) {
      lVar5 = (ulonglong)*(ushort *)(plVar3 + 1) - 0x5352;
    }
    if (lVar5 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000003;
    }
  }
  plVar3 = param_1;
  if (0xf < uVar1) {
    plVar3 = (longlong *)*param_1;
  }
  if (param_1[2] == 0x13) {
    iVar2 = memcmp(plVar3,"HKEY_CURRENT_CONFIG",0x13);
    if (iVar2 == 0) {
      FUN_180001b70(param_1);
      return 0xffffffff80000005;
    }
  }
  FUN_180001b70(param_1);
  return 0;
}

