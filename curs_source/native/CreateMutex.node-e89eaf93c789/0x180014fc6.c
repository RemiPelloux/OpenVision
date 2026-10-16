
/* Address: 0x180014fc6; Evidence: ev_6b5dc31a5cd23c079fba4f1e971e3873cba503bea953cd6e9f1abd4cc21e52ca */

void FUN_180014fc6(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007158();
  if (0 < *(int *)(lVar1 + 0x30)) {
    lVar1 = FUN_180007158();
    *(int *)(lVar1 + 0x30) = *(int *)(lVar1 + 0x30) + -1;
  }
  return;
}

