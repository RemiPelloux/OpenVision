
/* Address: 0x180002bbc; Evidence: ev_444dc092cddef7a66e33effe3b68b55fdb12371a681e0864d1979f370672ed9e */

void FUN_180002bbc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180002538();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180002538();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180002538();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

