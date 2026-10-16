
/* Address: 0x1800111a0; Evidence: ev_a8a359039c44f5248a8ffd25a8de3bac386fd81cb9edb620a7e9ee3255790ca2 */

uint FUN_1800111a0(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180028c48;
    DAT_180028c48 = param_1;
  }
  else {
    p_Var2 = FUN_18000b774();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000821c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

