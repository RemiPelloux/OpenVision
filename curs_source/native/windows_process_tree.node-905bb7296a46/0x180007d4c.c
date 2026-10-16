
/* Address: 0x180007d4c; Evidence: ev_446aa93470760d76a014ceaef1c9f1f676d02fbcf996b892dfff06438fb0850b */

void FUN_180007d4c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180008548();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180008548();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180008548();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

