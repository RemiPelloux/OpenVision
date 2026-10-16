
/* Address: 0x18000eaa8; Evidence: ev_8bb358edbead8542a4a3efdbe70a9727eeb7296ab2b006d0f356b70a46a53ec4 */

void FUN_18000eaa8(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002658();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180002658();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

