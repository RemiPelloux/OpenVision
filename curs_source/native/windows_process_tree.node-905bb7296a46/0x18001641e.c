
/* Address: 0x18001641e; Evidence: ev_5cd5962ba5197722edcc4e8373f178277b45cbfc99b4f489ca132d4c9cdb0580 */

void FUN_18001641e(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180008548();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

