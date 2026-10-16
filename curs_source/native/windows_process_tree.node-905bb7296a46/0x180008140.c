
/* Address: 0x180008140; Evidence: ev_105bf34f13496281992a23714b98c01992dfd23d54e33e0af902a71958ec0e97 */

/* WARNING: Function: _guard_dispatch_icall replaced with injection: guard_dispatch_icall */

void FUN_180008140(void)

{
  code *pcVar1;
  
  pcVar1 = (code *)FUN_180008134();
  if (pcVar1 != (code *)0x0) {
    (*pcVar1)();
  }
                    /* WARNING: Subroutine does not return */
  abort();
}

