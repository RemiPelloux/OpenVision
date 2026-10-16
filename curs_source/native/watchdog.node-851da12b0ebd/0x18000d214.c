
/* Address: 0x18000d214; Evidence: ev_e6810a43d3d3cb613589256d6f06c598b25f7c1c15ed26b4d4d560160b31e7aa */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000d29b) */
/* WARNING: Removing unreachable block (ram,0x00018000d278) */

void FUN_18000d214(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000d3bc();
  if (bVar1) {
    (*DAT_18001bb08)(&DAT_18001bb18);
  }
  else {
    do {
    } while (DAT_18001bb18 != 0);
    LOCK();
    DAT_18001bb18 = 1;
    UNLOCK();
  }
  FUN_18000d590(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000d590(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000d3bc();
  if (bVar1) {
    (*DAT_18001bb10)(&DAT_18001bb18);
  }
  else {
    DAT_18001bb18 = 0;
  }
  return;
}

