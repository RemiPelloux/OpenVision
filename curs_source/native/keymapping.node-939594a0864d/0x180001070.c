
/* Address: 0x180001070; Evidence: ev_3be3173e102f6f10487d4d6bd85da23f2bcf027b72591b9f3248a91096c273ba */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001070(longlong *param_1)

{
  if (DAT_1800281a0 != 0) {
    (*(code *)DAT_1800281a0)();
  }
  (**(code **)(*param_1 + 0x10))();
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}

