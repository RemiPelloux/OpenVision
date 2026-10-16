
/* Address: 0x18000b2c8; Evidence: ev_75f98dc93fd1dece6ab6bcf807ac8701a585f298922763edcbda16288065e967 */

void FUN_18000b2c8(longlong param_1)

{
  longlong lVar1;
  longlong lVar2;
  bool bVar3;
  
  lVar2 = FUN_18000babc();
  if (param_1 == *(longlong *)(lVar2 + 0x58)) {
    lVar2 = FUN_18000babc();
    lVar2 = *(longlong *)(lVar2 + 0x58);
    while (lVar2 != 0) {
      lVar1 = *(longlong *)(lVar2 + 8);
      bVar3 = param_1 == lVar2;
      lVar2 = lVar1;
      if (bVar3) {
        lVar2 = FUN_18000babc();
        *(longlong *)(lVar2 + 0x58) = lVar1;
        return;
      }
    }
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

