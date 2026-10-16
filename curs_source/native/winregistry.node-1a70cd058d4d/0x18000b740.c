
/* Address: 0x18000b740; Evidence: ev_32c5225dab9219c21a3a82b0ce50ef0a3552b1cdb5364b950627dc8636b38a30 */

uint FUN_18000b740(uint param_1)

{
  uint uVar1;
  __acrt_ptd *p_Var2;
  
  if (param_1 < 2) {
    LOCK();
    UNLOCK();
    uVar1 = DAT_18001cbb8;
    DAT_18001cbb8 = param_1;
  }
  else {
    p_Var2 = FUN_1800072a4();
    *(undefined4 *)p_Var2 = 0x16;
    FUN_180005fec();
    uVar1 = 0xffffffff;
  }
  return uVar1;
}

