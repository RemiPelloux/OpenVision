
/* Address: 0x18000c630; Evidence: ev_11fd5e3330f089b7a685e861069c5149c1fb0cb8e76fca691027906bd34a4630 */

ulonglong FUN_18000c630(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180022468 = FUN_18000eab0();
  DAT_180021098 = FlsAlloc(FUN_18000c250);
  uVar2 = CONCAT44(extraout_var,DAT_180021098);
  if (DAT_180021098 != 0xffffffff) {
    p_Var3 = FUN_18000c538();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000c680();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

