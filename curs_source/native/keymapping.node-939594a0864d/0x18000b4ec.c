
/* Address: 0x18000b4ec; Evidence: ev_6eef4ef3a74d3cd56558ae6a04b52837202bb3604493264c21222fdaac3cf122 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b4ec(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000bc18();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

