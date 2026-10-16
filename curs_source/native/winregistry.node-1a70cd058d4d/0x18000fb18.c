
/* Address: 0x18000fb18; Evidence: ev_b8730a6dae09d191be03065c0ac7a007bfe07c1dcef1bdb92e90dd5f7e5e5957 */

void FUN_18000fb18(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180003868();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180003868();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

