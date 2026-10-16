
/* Address: 0x18000a900; Evidence: ev_2f86fe17eeea748e9e76e0b8daa92ae92284848015b19a18c2f2fcad65e7faba */

uint FUN_18000a900(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001baf0;
    DAT_18001baf0 = param_1;
  }
  else {
    p_Var2 = FUN_180006350();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_1800061a8();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

