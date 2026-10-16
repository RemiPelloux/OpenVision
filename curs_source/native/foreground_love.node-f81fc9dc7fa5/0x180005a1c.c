
/* Address: 0x180005a1c; Evidence: ev_d370cae0e5aa19003b1fee448f1a4e81aa2094d90f4a61ac9cce7902f3aedff9 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005a1c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_180006648();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

