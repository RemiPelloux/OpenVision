
/* Address: 0x1800067a0; Evidence: ev_e6355fcca480f13c042c9a4e4d253014c1c17031cb6457d65f47b76064291efb */

ulonglong FUN_1800067a0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  PVOID pvVar3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001b300 = FUN_180008bc0();
  DAT_18001a098 = FlsAlloc(FUN_1800063c0);
  uVar2 = CONCAT44(extraout_var,DAT_18001a098);
  if (DAT_18001a098 != 0xffffffff) {
    pvVar3 = FUN_1800066a8();
    if (pvVar3 != (PVOID)0x0) {
      return CONCAT71((int7)((ulonglong)pvVar3 >> 8),1);
    }
    uVar1 = FUN_1800067f0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

