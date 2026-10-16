
/* Address: 0x18000e340; Evidence: ev_66487da6585876d3f0c2a9fa952bbbba47f96a1c423515995bc54d9f6efae405 */

undefined8 FUN_18000e340(byte *param_1,uint param_2,int *param_3,longlong param_4)

{
  ushort uVar1;
  undefined8 uVar2;
  int *piVar3;
  undefined8 local_res18 [2];
  
  piVar3 = &DAT_180028938;
  if (param_3 != (int *)0x0) {
    piVar3 = param_3;
  }
  uVar1 = (short)param_2 + 0x2400;
  if (*piVar3 == 0) {
    if (0x3ff < uVar1) {
      if ((ushort)((short)param_2 + 0x2800U) < 0x400) {
        *piVar3 = (param_2 & 0x27ff) * 0x400 + 0x10000;
        return 0;
      }
      uVar2 = FUN_180013e94(param_1,param_2 & 0xffff,(undefined8 *)piVar3,param_4);
      return uVar2;
    }
  }
  else if (uVar1 < 0x400) {
    local_res18[0] = 0;
    uVar2 = FUN_180013e94(param_1,(param_2 & 0x23ff) + *piVar3,local_res18,param_4);
    uVar2 = FUN_180013f38(uVar2,(undefined8 *)piVar3);
    return uVar2;
  }
  uVar2 = FUN_180013f40((undefined8 *)piVar3,param_4);
  return uVar2;
}

