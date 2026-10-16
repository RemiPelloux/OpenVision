
/* Address: 0x180002cdc; Evidence: ev_7aa51f3dc89ae2c1d37b3c55e8d4579b56ca2ca78f9a5674498b7eb134939aee */

void FUN_180002cdc(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_180002658();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_180002658();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_180002658();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

