
/* Address: 0x18000474c; Evidence: ev_216c9dddf22fab3cf47dc6ebc44eeaf88be6ca32b8f4c7b22b3204ca2c98433e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180004809) */
/* WARNING: Removing unreachable block (ram,0x00018000479a) */
/* WARNING: Removing unreachable block (ram,0x000180004848) */

int FUN_18000474c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180028120 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180004560(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_180004b24();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_180004b24();
      FUN_1800046c8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180004560(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}

