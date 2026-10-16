
/* Address: 0x18000cf44; Evidence: ev_c19f139d1bda78aff7e2b5a107b10efebd339b05c0352cebb2ce2888e19a2213 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000cfcb) */
/* WARNING: Removing unreachable block (ram,0x00018000cfa8) */

void FUN_18000cf44(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000d0ec();
  if (bVar1) {
    (*DAT_18001ab08)(&DAT_18001ab18);
  }
  else {
    do {
    } while (DAT_18001ab18 != 0);
    LOCK();
    DAT_18001ab18 = 1;
    UNLOCK();
  }
  FUN_18000d2c0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000d2c0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000d0ec();
  if (bVar1) {
    (*DAT_18001ab10)(&DAT_18001ab18);
  }
  else {
    DAT_18001ab18 = 0;
  }
  return;
}

