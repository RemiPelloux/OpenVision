
/* Address: 0x18000ec58; Evidence: ev_e38688415e082a8f37c9470c062db3566147feaefc5fd8e72caf0e7fbb8c5e55 */

void FUN_18000ec58(void)

{
  longlong lVar1;
  
  lVar1 = FUN_1800027f8();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_1800027f8();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

