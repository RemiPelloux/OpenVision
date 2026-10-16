
/* Address: 0x18000656c; Evidence: ev_c977ca640cd75742c0ef6dd0db1ee5a4a4bc53dc14206be4f22d146cd1497617 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180006629) */
/* WARNING: Removing unreachable block (ram,0x0001800065ba) */
/* WARNING: Removing unreachable block (ram,0x000180006668) */

int FUN_18000656c(undefined8 param_1,int param_2,longlong param_3)

{
  int iVar1;
  ulonglong uVar2;
  undefined8 uVar3;
  
  if ((param_2 == 0) && (DAT_180023bf8 < 1)) {
    iVar1 = 0;
  }
  else {
    if ((param_2 - 1U < 2) && (uVar2 = FUN_180006380(param_1,param_2,param_3), (int)uVar2 == 0)) {
      return 0;
    }
    uVar3 = FUN_18000695c();
    iVar1 = (int)uVar3;
    if ((param_2 == 1) && (iVar1 == 0)) {
      FUN_18000695c();
      FUN_1800064e8(param_3 != 0);
    }
    if ((param_2 == 0) || (param_2 == 3)) {
      uVar2 = FUN_180006380(param_1,param_2,param_3);
      iVar1 = 0;
      if ((int)uVar2 != 0) {
        iVar1 = 1;
      }
    }
  }
  return iVar1;
}

