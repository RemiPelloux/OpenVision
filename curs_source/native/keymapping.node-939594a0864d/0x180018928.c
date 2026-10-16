
/* Address: 0x180018928; Evidence: ev_9ec17c9f800f9ec38a584e2be62aa56969d12686f2141396d422e0b41e875f24 */

void FUN_180018928(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180005a98();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180005a98();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

