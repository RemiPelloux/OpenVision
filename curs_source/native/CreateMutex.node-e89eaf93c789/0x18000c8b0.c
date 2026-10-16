
/* Address: 0x18000c8b0; Evidence: ev_de068bb91c6977256c838c978fff9c76a681a0a2cbd1e1a00883dac90eb9c142 */

ulonglong FUN_18000c8b0(void)

{
  undefined4 uVar1;
  ulonglong uVar2;
  __acrt_ptd *p_Var3;
  undefined4 extraout_var_00;
  undefined4 extraout_var;
  
  DAT_180023468 = FUN_18000ed30();
  DAT_180022098 = FlsAlloc(FUN_18000c4d0);
  uVar2 = CONCAT44(extraout_var,DAT_180022098);
  if (DAT_180022098 != 0xffffffff) {
    p_Var3 = FUN_18000c7b8();
    if (p_Var3 != (__acrt_ptd *)0x0) {
      return CONCAT71((int7)((ulonglong)p_Var3 >> 8),1);
    }
    uVar1 = FUN_18000c900();
    uVar2 = CONCAT44(extraout_var_00,uVar1);
  }
  return uVar2 & 0xffffffffffffff00;
}

