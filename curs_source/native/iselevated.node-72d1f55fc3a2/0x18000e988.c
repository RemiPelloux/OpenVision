
/* Address: 0x18000e988; Evidence: ev_62697017865c1b54c4aec982ac08dc086708312bd0e72f13db9a1746bc817420 */

void FUN_18000e988(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180002538();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180002538();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

