
/* Address: 0x180001070; Evidence: ev_a66d3580059e8fed2fec6ec6e1a8151ac9fbed08d154c047b7dd6d76ddf0e82f */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180001070(longlong *param_1)

{
  if (DAT_18001c138 != 0) {
    (*(code *)DAT_18001c138)();
  }
  (**(code **)(*param_1 + 0x10))();
                    /* WARNING: Subroutine does not return */
  _invoke_watson((wchar_t *)0x0,(wchar_t *)0x0,(wchar_t *)0x0,0,0);
}

