
/* Address: 0x18000697c; Evidence: ev_3b9c5f7f902bb45dc50634dd8ede0c30a59df821372c02afa65862153c9754ea */

void FUN_18000697c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180007158();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180007158();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180007158();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

