
/* Address: 0x180017a5c; Evidence: ev_35d25d49eaadaed9a041fd2f2e4a5774e4cfc8e1c04f38e21d80303b0bcdbd11 */

undefined4 FUN_180017a5c(undefined8 *param_1)

{
  undefined4 uVar1;
  
  *(undefined4 *)(param_1 + 3) = 0xffffffff;
  *param_1 = 0;
  param_1[1] = 0;
  *(undefined4 *)(param_1 + 2) = 0;
  *(undefined8 *)((longlong)param_1 + 0x1c) = 0;
  param_1[5] = 0;
  LOCK();
  uVar1 = *(undefined4 *)((longlong)param_1 + 0x14);
  *(undefined4 *)((longlong)param_1 + 0x14) = 0;
  UNLOCK();
  return uVar1;
}

