
/* Address: 0x180016e04; Evidence: ev_506e7ed05389c7861f018883456ecc99703360df53d8f6961dd61ba7d8bc0bd3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180016e8b) */
/* WARNING: Removing unreachable block (ram,0x000180016e68) */

void FUN_180016e04(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_180016fac();
  if (bVar1) {
    (*DAT_180028c60)(&DAT_180028c70);
  }
  else {
    do {
    } while (DAT_180028c70 != 0);
    LOCK();
    DAT_180028c70 = 1;
    UNLOCK();
  }
  FUN_180017180(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_180017180(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_180016fac();
  if (bVar1) {
    (*DAT_180028c68)(&DAT_180028c70);
  }
  else {
    DAT_180028c70 = 0;
  }
  return;
}

