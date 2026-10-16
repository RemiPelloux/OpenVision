
/* Address: 0x180006950; Evidence: ev_6c9704f379b0c163a31689de13b6dcc7f385c5174350000aa9b021aaf9adaa63 */

ulonglong FUN_180006950(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_18001b300 = FUN_180008d70();
  DAT_18001a098 = FlsAlloc(FUN_180006570);
  uVar2 = CONCAT44(extraout_var,DAT_18001a098);
  if (DAT_18001a098 != 0xffffffff) {
    p_Var3 = FUN_180006858();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_1800069a0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

