
/* Address: 0x18000b4d0; Evidence: ev_83ce6fd6870c84bd7f3b6a026d0cdf79a0d1ae7ebd9d6e9f83ded129dcd260d8 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_18000b4d0(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_18000b4c4();
  if (pcVar1 != (code *)0x0) {
    (*pcVar1)();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

