
/* Address: 0x1800032d0; Evidence: ev_0fb7362f42d4e54be5f85cef8656e42b43336bd307ed309d08eb2efce03d8e4d */

ulonglong FUN_1800032d0(ulonglong param_1)

{
  longlong lVar1;
  ulonglong uVar2;
  
  if (param_1 == 0) {
    return 0;
  }
  if (param_1 < 0x1000) {
    uVar2 = FUN_1800062f8(param_1);
    return uVar2;
  }
  if (param_1 + 0x27 <= param_1) {
                    /* WARNING: Subroutine does not return */
    FUN_180001150();
  }
  lVar1 = FUN_1800062f8(param_1 + 0x27);
  if (lVar1 != 0) {
    uVar2 = lVar1 + 0x27U & 0xffffffffffffffe0;
    *(longlong *)(uVar2 - 8) = lVar1;
    return uVar2;
  }
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}

