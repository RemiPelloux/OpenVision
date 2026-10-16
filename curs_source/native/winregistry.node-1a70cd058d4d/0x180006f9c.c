
/* Address: 0x180006f9c; Evidence: ev_188e952bcc0a78fa2f225e49172ed8ffe2ff2dca448342b2591e0bbbd97e3cdb */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180006f9c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180007748();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

