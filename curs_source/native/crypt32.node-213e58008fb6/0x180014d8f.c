
/* Address: 0x180014d8f; Evidence: ev_adf773a710d547beb714f8a221962b9f115275859e8547c5932a6d1572714019 */

void FUN_180014d8f(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006ed8();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180006ed8();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

