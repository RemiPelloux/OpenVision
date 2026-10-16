
/* Address: 0x180016457; Evidence: ev_4ae6021a63450c46c3429cee3150c728c700cdac726891f82fdac8f1100659a9 */

void FUN_180016457(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180008548();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180008548();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

