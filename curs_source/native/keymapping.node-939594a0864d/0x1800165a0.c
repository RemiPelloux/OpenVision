
/* Address: 0x1800165a0; Evidence: ev_a7e81920e914346bfb56f2d91186f7747d32c20ca1ec28eddbbb7b86936ab22c */

uint FUN_1800165a0(uint param_1,ulonglong *param_2)

{
  uint uVar1;
  undefined4 extraout_var;
  uint uVar2;
  ulonglong uVar3;
  
  uVar3 = 0;
  uVar2 = param_1 & 0x1f;
  if (param_1 == 0) {
    uVar2 = 0;
  }
  else {
    uVar1 = FUN_180016a40();
    *param_2 = CONCAT44(extraout_var,uVar1);
    if (((param_1 & 8) == 0) || (-1 < (char)uVar1)) {
      if (((param_1 & 4) == 0) || ((uVar1 & 0x200) == 0)) {
        if (((param_1 & 1) == 0) || ((uVar1 & 0x400) == 0)) {
          if (((param_1 & 2) != 0) && ((uVar1 & 0x800) != 0)) {
            uVar2 = param_1 & 0x1d;
            uVar3 = (ulonglong)(param_1 & 0x10);
          }
        }
        else {
          uVar3 = 8;
          uVar2 = param_1 & 0x1e;
        }
      }
      else {
        uVar3 = 4;
        uVar2 = param_1 & 0x1b;
      }
    }
    else {
      uVar3 = 1;
      uVar2 = param_1 & 0x17;
    }
    if (((param_1 & 0x10) != 0) && ((uVar1 & 0x1000) != 0)) {
      uVar3 = uVar3 | 0x20;
      uVar2 = uVar2 & 0xffffffef;
    }
    if (uVar2 != 0) {
      FUN_1800169c0(0x1f80,0xffc0);
    }
    if ((uVar3 != 0) && ((uVar3 & ~CONCAT44(extraout_var,uVar1)) != 0)) {
      if (uVar2 == 0) {
        FUN_180016a50(uVar1 | (uint)uVar3);
      }
      else {
        FUN_180016a60((uint)uVar3);
      }
    }
  }
  return uVar2;
}

