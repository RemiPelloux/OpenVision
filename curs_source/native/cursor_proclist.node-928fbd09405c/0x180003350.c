
/* Address: 0x180003350; Evidence: ev_e8c9ef8a85713d3bbc9b252e4074cf75b66dabacaecd0814e85caf75201502ec */

/* WARNING: Function: __security_check_cookie replaced with injection: security_check_cookie */

longlong * FUN_180003350(longlong *param_1,undefined8 *param_2,undefined1 param_3)

{
  undefined4 *puVar1;
  undefined8 uVar2;
  uint *puVar3;
  undefined1 auStackY_158 [32];
  uint *local_118;
  uint *local_110;
  longlong local_108;
  uint *local_100;
  longlong *local_f8;
  uint local_e8 [2];
  undefined8 local_e0;
  undefined8 uStack_d8;
  undefined8 local_d0;
  undefined8 local_c8;
  undefined8 local_c0;
  undefined8 local_b8;
  undefined8 uStack_b0;
  undefined8 local_98;
  undefined8 uStack_90;
  undefined8 local_88;
  undefined8 uStack_80;
  undefined8 local_78;
  undefined8 uStack_70;
  undefined8 local_68;
  undefined8 uStack_60;
  undefined8 local_58;
  undefined8 uStack_50;
  undefined8 local_48;
  undefined8 uStack_40;
  ulonglong local_38;
  
  local_38 = DAT_180028040 ^ (ulonglong)auStackY_158;
  local_f8 = param_1;
  FUN_180007760((longlong *)&local_118,param_2,param_3);
  *param_1 = 0;
  param_1[1] = 0;
  param_1[2] = 0;
  FUN_180005530(param_1,(longlong)local_110 - (longlong)local_118 >> 2);
  local_100 = local_110;
  for (puVar3 = local_118; puVar3 != local_110; puVar3 = puVar3 + 1) {
    uStack_d8 = 0;
    local_d0 = 0;
    local_c8 = 0xf;
    local_e0 = 0;
    local_c0 = 0;
    local_b8 = 0;
    uStack_b0 = 0;
    uStack_90 = 0;
    local_88 = 0;
    uStack_80 = 0xf;
    local_98 = 0;
    uStack_70 = 0;
    local_68 = 0;
    uStack_60 = 0xf;
    local_78 = 0;
    uStack_50 = 0;
    local_48 = 0;
    uStack_40 = 0xf;
    local_58 = 0;
    uVar2 = FUN_180007b40(*puVar3,local_e8);
    if ((char)uVar2 != '\0') {
      puVar1 = (undefined4 *)param_1[1];
      if (puVar1 == (undefined4 *)param_1[2]) {
        FUN_180006250(param_1,puVar1,local_e8);
      }
      else {
        FUN_180006d40(puVar1,local_e8);
        param_1[1] = param_1[1] + 0xb0;
      }
    }
    FUN_180003570((longlong)local_e8);
  }
  if (local_118 != (uint *)0x0) {
    puVar3 = local_118;
    if ((0xfff < (local_108 - (longlong)local_118 & 0xfffffffffffffffcU)) &&
       (puVar3 = *(uint **)(local_118 + -2),
       0x1f < (ulonglong)((longlong)local_118 + (-8 - (longlong)puVar3)))) {
                    /* WARNING: Subroutine does not return */
      _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
    }
    thunk_FUN_1800116e0(puVar3);
  }
  return param_1;
}

