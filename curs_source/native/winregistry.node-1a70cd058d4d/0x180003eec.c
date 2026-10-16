
/* Address: 0x180003eec; Evidence: ev_eee18a6719e3b688d3fe5458105dd5d5fc03928545cca8a407f24248dac68c39 */

void FUN_180003eec(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180003868();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180003868();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180003868();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

