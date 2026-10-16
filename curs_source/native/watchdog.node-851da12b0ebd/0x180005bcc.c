
/* Address: 0x180005bcc; Evidence: ev_74f4f38af9cab78164eb4d9111dfe0e7dc75da3e55523c2e9ea6ef365b27f54e */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180005bcc(void)

{
  longlong lVar1;
  
  lVar1 = FUN_1800067f8();
  if (*(code **)(lVar1 + 0x18) != (code *)0x0) {
    (**(code **)(lVar1 + 0x18))();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

