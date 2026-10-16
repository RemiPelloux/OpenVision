
/* Address: 0x180004f00; Evidence: ev_1bd960b3a526aa0dccd3d1c92f42b7edfe0bebfd865a3440ed245d2afdebbf58 */

/* WARNING: This is an inlined function */

void __cdecl __security_check_cookie(uintptr_t _StackCookie)

{
  if ((_StackCookie == DAT_180022000) && ((short)(_StackCookie >> 0x30) == 0)) {
    return;
  }
  FUN_180005350();
  return;
}

