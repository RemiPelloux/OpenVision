
/* Address: 0x1800113d4; Evidence: ev_cf6b99b1a53536a73dd2ef87c148d8d47b0683cb6bbfbd2eac90fcd3b5abb1cd */

ulonglong FUN_1800113d4(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180029598 = FUN_180013820();
  DAT_1800280d8 = FlsAlloc(FUN_180011000);
  uVar2 = CONCAT44(extraout_var,DAT_1800280d8);
  if (DAT_1800280d8 != 0xffffffff) {
    p_Var3 = FUN_1800112e8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_180011418();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

