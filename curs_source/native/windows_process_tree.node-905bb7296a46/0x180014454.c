
/* Address: 0x180014454; Evidence: ev_039b6d9a30d337c1269aeacc4273d3c476e94d51baad35aef87615545c469cd3 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800144db) */
/* WARNING: Removing unreachable block (ram,0x0001800144b8) */

void FUN_180014454(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_1800145fc();
  if (bVar1) {
    (*DAT_180024c70)(&DAT_180024c80);
  }
  else {
    do {
    } while (DAT_180024c80 != 0);
    LOCK();
    DAT_180024c80 = 1;
    UNLOCK();
  }
  FUN_1800147d0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_1800147d0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_1800145fc();
  if (bVar1) {
    (*DAT_180024c78)(&DAT_180024c80);
  }
  else {
    DAT_180024c80 = 0;
  }
  return;
}

