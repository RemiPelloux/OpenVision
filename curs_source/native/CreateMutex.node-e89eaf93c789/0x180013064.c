
/* Address: 0x180013064; Evidence: ev_a492e9faa567d4b706662691c0b4942477f3c3f6db96086265bdf489d8cc35b2 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x0001800130eb) */
/* WARNING: Removing unreachable block (ram,0x0001800130c8) */

void FUN_180013064(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18001320c();
  if (bVar1) {
    (*DAT_180023c70)(&DAT_180023c80);
  }
  else {
    do {
    } while (DAT_180023c80 != 0);
    LOCK();
    DAT_180023c80 = 1;
    UNLOCK();
  }
  FUN_1800133e0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_1800133e0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18001320c();
  if (bVar1) {
    (*DAT_180023c78)(&DAT_180023c80);
  }
  else {
    DAT_180023c80 = 0;
  }
  return;
}

