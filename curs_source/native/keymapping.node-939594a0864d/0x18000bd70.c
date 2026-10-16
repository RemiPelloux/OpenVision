
/* Address: 0x18000bd70; Evidence: ev_8d5762c0908ee876b0a5ca5403d851bac622c63ee7f748d3dd4ac327ac339281 */

ulonglong FUN_18000bd70(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180028448 = FUN_18000c460();
  DAT_1800271a8 = FlsAlloc(FUN_18000b990);
  uVar2 = CONCAT44(extraout_var,DAT_1800271a8);
  if (DAT_1800271a8 != 0xffffffff) {
    p_Var3 = FUN_18000bc78();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000bdc0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

