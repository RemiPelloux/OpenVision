
/* Address: 0x18000d39c; Evidence: ev_8c415ee83f2fb808c406c25f1b2d078ee56373b965eaf9213075ca2287535c40 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000d39c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000db48();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

