
/* Address: 0x18000611c; Evidence: ev_a6b8b3bd5fead37fef6d2b407a017e106ad98bc2103498436b6b8831505b8599 */

void FUN_18000611c(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180005a98();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180005a98();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180005a98();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

