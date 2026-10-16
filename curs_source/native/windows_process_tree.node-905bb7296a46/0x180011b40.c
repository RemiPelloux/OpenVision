
/* Address: 0x180011b40; Evidence: ev_5a39b3068896463220e65ec77f442fe71f544df6b0c370dbfc5d546fbb9158f9 */

uint FUN_180011b40(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180024c58;
    DAT_180024c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000d6a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000c3ec();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

