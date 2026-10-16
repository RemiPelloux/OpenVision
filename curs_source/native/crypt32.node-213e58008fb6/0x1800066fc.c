
/* Address: 0x1800066fc; Evidence: ev_f5adbeddc54d8fd2a3896ecd34b5667e1af618740e90c3ad66e84c481479bdb1 */

void FUN_1800066fc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180006ed8();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180006ed8();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180006ed8();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

