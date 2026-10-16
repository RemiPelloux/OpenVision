
/* Address: 0x180007c28; Evidence: ev_f014e0dbbdc42fd0d1c11219a13a5725e06d199c1a76364c692da4a1fe18bd36 */

uint FUN_180007c28(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

