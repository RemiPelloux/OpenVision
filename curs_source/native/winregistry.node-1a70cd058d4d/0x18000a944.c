
/* Address: 0x18000a944; Evidence: ev_0d6a7dc2b28520e5752855bf3a7d0c2f350bd6529b8e36dc157059e058eef6e7 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

int FUN_18000a944(ushort *param_1,byte *param_2,ulonglong param_3,longlong *param_4)

{
  uint uVar1;
  longlong *plVar2;
  int iVar3;
  
  if ((param_2 == (byte *)0x0) || (param_3 == 0)) {
    _DAT_18001cba0 = 0;
  }
  else {
    if (*param_2 != 0) {
      if ((char)param_4[5] == '\0') {
        FUN_1800070a0(param_4);
      }
      plVar2 = (longlong *)param_4[3];
      uVar1 = *(uint *)((longlong)plVar2 + 0xc);
      if (uVar1 != 0xfde9) {
        if (plVar2[0x27] == 0) {
          if (param_1 != (ushort *)0x0) {
            *param_1 = (ushort)*param_2;
          }
          return 1;
        }
        if (*(short *)(*plVar2 + (ulonglong)*param_2 * 2) < 0) {
          if ((((1 < (int)plVar2[1]) && ((int)plVar2[1] <= (int)param_3)) &&
              (iVar3 = FUN_1800095d8(uVar1,9), iVar3 != 0)) ||
             (((ulonglong)(longlong)*(int *)(param_4[3] + 8) <= param_3 && (param_2[1] != 0)))) {
            return *(int *)(param_4[3] + 8);
          }
        }
        else {
          iVar3 = FUN_1800095d8(uVar1,9);
          if (iVar3 != 0) {
            return 1;
          }
        }
        *(undefined1 *)(param_4 + 6) = 1;
        *(undefined4 *)((longlong)param_4 + 0x2c) = 0x2a;
        return -1;
      }
      iVar3 = FUN_18000acb4(param_1,param_2,param_3,(uint *)&DAT_18001cba0,(longlong)param_4);
      if (iVar3 < 0) {
        return -1;
      }
      return iVar3;
    }
    if (param_1 != (ushort *)0x0) {
      *param_1 = 0;
    }
  }
  return 0;
}

