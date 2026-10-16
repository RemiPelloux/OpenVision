
/* Address: 0x1800070a0; Evidence: ev_4c61c8254a871575ae258802267a96cd72c61c6734f4e54aa1c54dcd5c3fd111 */

void FUN_1800070a0(longlong *param_1)

{
  longlong lVar1;
  
  lVar1 = FUN_180005c00(param_1);
  param_1[3] = *(longlong *)(lVar1 + 0x90);
  param_1[4] = *(longlong *)(lVar1 + 0x88);
  FUN_180007948(lVar1,param_1 + 3,param_1[1]);
  FUN_1800079b4(lVar1,param_1 + 4,param_1[1]);
  if ((*(uint *)(lVar1 + 0x3a8) & 2) == 0) {
    *(uint *)(lVar1 + 0x3a8) = *(uint *)(lVar1 + 0x3a8) | 2;
    *(undefined1 *)(param_1 + 5) = 2;
  }
  return;
}

