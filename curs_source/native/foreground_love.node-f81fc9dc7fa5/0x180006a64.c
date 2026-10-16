
/* Address: 0x180006a64; Evidence: ev_c9db9eea92a5d427f3dd8874431001d80a60d2707ed0b452174063d58da5c8f9 */

uint FUN_180006a64(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

