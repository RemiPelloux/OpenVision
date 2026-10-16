
/* Address: 0x180011738; Evidence: ev_7b7adf4ea9f7425b72e5de7c7cc55f1a569d777161da3467e72bb091bd6f4532 */

uint FUN_180011738(void)

{
  return *(uint *)((longlong)ProcessEnvironmentBlock + 0xbc) >> 8 & 0xffffff01;
}

