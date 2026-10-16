
/* Address: 0x180010adc; Evidence: ev_553838f17ae1ddcb36f8deefd2ad60f1c77fa425d8ee15fd6731d36346549bed */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180010adc(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180011288();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

