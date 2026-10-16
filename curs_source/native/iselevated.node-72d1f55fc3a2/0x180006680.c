
/* Address: 0x180006680; Evidence: ev_c1cb9765c1e1a195392c5cd343fae1d9f4edce3c6b4c4b53a36da779344d5cb1 */

ulonglong FUN_180006680(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001a300 = FUN_180008aa0();
  DAT_180019098 = FlsAlloc(FUN_1800062a0);
  uVar2 = CONCAT44(extraout_var,DAT_180019098);
  if (DAT_180019098 != 0xffffffff) {
    p_Var3 = FUN_180006588();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_1800066d0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

