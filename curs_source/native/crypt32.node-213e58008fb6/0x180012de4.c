
/* Address: 0x180012de4; Evidence: ev_70d9a0a76ccc0dd3f27591278a9182a7d6806759563fb94c058a04732d0ee4e0 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x000180012e6b) */
/* WARNING: Removing unreachable block (ram,0x000180012e48) */

void FUN_180012de4(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_180012f8c();
  if (bVar1) {
    (*DAT_180022c70)(&DAT_180022c80);
  }
  else {
    do {
    } while (DAT_180022c80 != 0);
    LOCK();
    DAT_180022c80 = 1;
    UNLOCK();
  }
  FUN_180013160(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_180013160(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_180012f8c();
  if (bVar1) {
    (*DAT_180022c78)(&DAT_180022c80);
  }
  else {
    DAT_180022c80 = 0;
  }
  return;
}

