
/* Address: 0x180015230; Evidence: ev_cff7ab955314af23b3ccbb247aeffdb13d7e04864af42718a2687be09e0a663f */

uint FUN_180015230(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180029d88;
    DAT_180029d88 = param_1;
  }
  else {
    p_Var2 = FUN_180010de4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000f91c();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

