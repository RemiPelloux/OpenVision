
/* Address: 0x180014d56; Evidence: ev_9126baa3db99c78066525713bb387baef33e2d9d29c2c739e65d10007e353886 */

void FUN_180014d56(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180006ed8();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

