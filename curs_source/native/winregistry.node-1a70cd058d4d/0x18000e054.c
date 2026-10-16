
/* Address: 0x18000e054; Evidence: ev_4abbfaf4ee9e28955b524c4fb4100bafc346a009393b40247209d036746f7111 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */
/* WARNING: Removing unreachable block (ram,0x00018000e0db) */
/* WARNING: Removing unreachable block (ram,0x00018000e0b8) */

void FUN_18000e054(void *param_1,SIZE_T param_2,undefined8 *param_3)

{
  bool bVar1;
  DWORD local_res18 [2];
  
  bVar1 = FUN_18000e1fc();
  if (bVar1) {
    (*DAT_18001cbd0)(&DAT_18001cbe0);
  }
  else {
    do {
    } while (DAT_18001cbe0 != 0);
    LOCK();
    DAT_18001cbe0 = 1;
    UNLOCK();
  }
  FUN_18000e3d0(param_1,param_2,4,local_res18);
  *(undefined8 *)*param_3 = param_3[1];
  FUN_18000e3d0(param_1,param_2,local_res18[0],local_res18);
  bVar1 = FUN_18000e1fc();
  if (bVar1) {
    (*DAT_18001cbd8)(&DAT_18001cbe0);
  }
  else {
    DAT_18001cbe0 = 0;
  }
  return;
}

