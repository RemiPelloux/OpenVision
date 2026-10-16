
/* Address: 0x1800104d0; Evidence: ev_ff0ef93dceea86f6b57e6f16db75d4221f8780d02646dacdf70dc0a398ce5d4b */

uint FUN_1800104d0(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180022c58;
    DAT_180022c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000c034();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000ad7c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

