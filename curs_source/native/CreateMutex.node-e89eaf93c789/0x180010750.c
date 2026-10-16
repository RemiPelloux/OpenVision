
/* Address: 0x180010750; Evidence: ev_ce8ccb280caba595592b8ec851537047eb82241db837544ef52939eaafc2f43d */

uint FUN_180010750(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_180023c58;
    DAT_180023c58 = param_1;
  }
  else {
    p_Var2 = FUN_18000c2b4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_18000affc();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

