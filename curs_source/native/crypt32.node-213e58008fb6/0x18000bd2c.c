
/* Address: 0x18000bd2c; Evidence: ev_351f93ef36b5ec1e4cab14306a1eea330151f2d80f2f0e6d52c490b5b011e469 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000bd2c(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c4d8();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

