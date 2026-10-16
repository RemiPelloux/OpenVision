
/* Address: 0x18000dca0; Evidence: ev_f4679feabc21d086ef9f7fa21a525e6827fb7905d9e2549f301196a4d3427526 */

ulonglong FUN_18000dca0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180024468 = FUN_180010120();
  DAT_180023098 = FlsAlloc(FUN_18000d8c0);
  uVar2 = CONCAT44(extraout_var,DAT_180023098);
  if (DAT_180023098 != 0xffffffff) {
    p_Var3 = FUN_18000dba8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000dcf0();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

