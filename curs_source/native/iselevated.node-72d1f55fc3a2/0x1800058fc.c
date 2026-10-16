
/* Address: 0x1800058fc; Evidence: ev_ac6abe3247ed22b167adccd0c33db241b9fe6100352c37b11470f6c44301c98c */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_1800058fc(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006528();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

