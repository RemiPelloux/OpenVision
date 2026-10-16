
/* Address: 0x180002e7c; Evidence: ev_adcc16b9d88a43a84df8a4237b9eecdc0f6c51ffe42f1531cea854f8012afdfb */

void FUN_180002e7c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_1800027f8();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_1800027f8();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_1800027f8();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

