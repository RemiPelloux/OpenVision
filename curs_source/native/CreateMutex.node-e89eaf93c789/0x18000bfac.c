
/* Address: 0x18000bfac; Evidence: ev_d66841805b10cea7b006d391423fe5c5c2b0e506d2ae035f47f35e419843889e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000bfac(void)

{
  longlong lVar1;
  
  lVar1 = FUN_18000c758();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

